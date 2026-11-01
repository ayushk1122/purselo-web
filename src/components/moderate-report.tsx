"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const ENDPOINTS = new Map([
  ["dnejxyohyzpwfjmnnarq", "https://dnejxyohyzpwfjmnnarq.supabase.co/functions/v1/moderate-report"],
  ["czeplbbbszjposemzaqw", "https://czeplbbbszjposemzaqw.supabase.co/functions/v1/moderate-report"],
]);

const MESSAGES = {
  invalid: "This link isn\u2019t valid.",
  expired: "This link has expired. Use the Supabase SQL editor (docs/operations/moderation.md).",
  alreadyClosed: "This report was already handled.",
  notApplicable: "That action doesn\u2019t fit this report.",
  noSuchReport: "That report no longer exists.",
  generic: "Something went wrong. Try again, or use the SQL editor.",
};

const ERROR_MESSAGES = new Map([
  ["invalid_link", MESSAGES.invalid],
  ["expired", MESSAGES.expired],
  ["already_closed", MESSAGES.alreadyClosed],
  ["not_applicable", MESSAGES.notApplicable],
  ["no_such_report", MESSAGES.noSuchReport],
]);

const NOTE_LIMIT = 500;

type Report = {
  id: string;
  status: "open" | "actioned" | "dismissed";
  resolution_note: string | null;
  reason: string;
  note: string | null;
  what: string;
  link: string;
  owner: string;
  reporter: string;
  created_at: string;
};

type ReportResponse = {
  environment: "staging" | "production";
  action: "dismiss" | "remove_from_explore" | "hide_pursuit" | "suspend";
  action_label: string;
  report: Report;
};

type Failure = { message: string; retryable: boolean };
type Outcome<T> = ({ ok: true } & { data: T }) | ({ ok: false } & Failure);

type View =
  | { kind: "loading" }
  | { kind: "message"; message: string; retryable: boolean }
  | { kind: "report"; data: ReportResponse }
  | { kind: "done"; result: string };

function endpointFor(token: string): string | null {
  const [part1, part2] = token.split(".");
  if (!part1 || !part2) return null;
  try {
    const base64 = part1
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(part1.length / 4) * 4, "=");
    const bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
    const payload: unknown = JSON.parse(new TextDecoder().decode(bytes));
    const project =
      typeof payload === "object" && payload !== null ? (payload as { p?: unknown }).p : undefined;
    return typeof project === "string" ? (ENDPOINTS.get(project) ?? null) : null;
  } catch {
    return null;
  }
}

async function post<T>(url: string, body: object): Promise<Outcome<T>> {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "omit",
      referrerPolicy: "no-referrer",
      cache: "no-store",
    });
  } catch {
    return { ok: false, message: MESSAGES.generic, retryable: true };
  }

  let json: unknown = null;
  try {
    json = await response.json();
  } catch {}

  if (response.ok && typeof json === "object" && json !== null) {
    return { ok: true, data: json as T };
  }
  const code = typeof json === "object" && json !== null ? (json as { error?: unknown }).error : undefined;
  const message = typeof code === "string" ? ERROR_MESSAGES.get(code) : undefined;
  return message
    ? { ok: false, message, retryable: false }
    : { ok: false, message: MESSAGES.generic, retryable: true };
}

function isReportResponse(value: unknown): value is ReportResponse {
  if (typeof value !== "object" || value === null) return false;
  const { action_label, report } = value as Partial<ReportResponse>;
  return (
    typeof action_label === "string" &&
    typeof report === "object" &&
    report !== null &&
    typeof report.status === "string"
  );
}

function safeHttpUrl(value: string): string | null {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

function formatDate(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

const buttonClass =
  "inline-flex min-h-12 w-full items-center justify-center rounded-full px-7 text-sm font-medium tracking-[0.02em] text-paper transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50";

export function ModerateReport() {
  const tokenRef = useRef<string | null>(null);
  const endpointRef = useRef<string | null>(null);
  const startedRef = useRef(false);
  const [view, setView] = useState<View>({ kind: "loading" });
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmError, setConfirmError] = useState<Failure | null>(null);

  const load = useCallback(async () => {
    const token = tokenRef.current;
    const endpoint = endpointRef.current;
    if (!token || !endpoint) {
      setView({ kind: "message", message: MESSAGES.invalid, retryable: false });
      return;
    }
    setView({ kind: "loading" });
    const outcome = await post<unknown>(endpoint, { token });
    if (!outcome.ok) {
      setView({ kind: "message", message: outcome.message, retryable: outcome.retryable });
    } else if (!isReportResponse(outcome.data)) {
      setView({ kind: "message", message: MESSAGES.generic, retryable: true });
    } else {
      setView({ kind: "report", data: outcome.data });
    }
  }, []);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const { hash, pathname, search } = window.location;
    if (hash) window.history.replaceState(null, "", pathname + search);

    const token = hash.startsWith("#t=") ? hash.slice(3) : "";
    const endpoint = token ? endpointFor(token) : null;
    if (token && endpoint) {
      tokenRef.current = token;
      endpointRef.current = endpoint;
    }
    void load();
  }, [load]);

  async function confirm() {
    const token = tokenRef.current;
    const endpoint = endpointRef.current;
    if (submitting || !token || !endpoint) return;

    setSubmitting(true);
    setConfirmError(null);
    const outcome = await post<{ done?: unknown; result?: unknown }>(endpoint, {
      token,
      confirm: true,
      note: note.trim(),
    });

    if (outcome.ok && outcome.data.done === true) {
      setView({ kind: "done", result: String(outcome.data.result ?? "") });
      return;
    }
    const failure: Failure = outcome.ok ? { message: MESSAGES.generic, retryable: true } : outcome;
    setConfirmError({ message: failure.message, retryable: failure.retryable });
    if (failure.retryable) setSubmitting(false);
  }

  return (
    <section className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-lg px-5 py-16 sm:px-8 md:py-24">
        <p className="text-center text-[0.72rem] uppercase tracking-[0.22em] text-muted">
          Moderation
        </p>

        {view.kind === "loading" ? (
          <p className="mt-8 text-center text-base text-muted" role="status">
            Loading report&hellip;
          </p>
        ) : null}

        {view.kind === "message" ? (
          <div className="mt-8 text-center" role="alert">
            <p className="font-serif text-3xl leading-tight tracking-[-0.02em] text-ink">
              {view.message}
            </p>
            {view.retryable ? (
              <button
                type="button"
                onClick={() => void load()}
                className={`${buttonClass} mt-8 bg-ink hover:bg-ink/85 sm:w-auto`}
              >
                Try again
              </button>
            ) : null}
          </div>
        ) : null}

        {view.kind === "done" ? (
          <p className="mt-8 text-center font-serif text-3xl leading-tight tracking-[-0.02em] text-ink" role="status">
            Done: {view.result}
          </p>
        ) : null}

        {view.kind === "report" ? (
          <ReportDetails
            data={view.data}
            note={note}
            onNoteChange={setNote}
            submitting={submitting}
            confirmError={confirmError}
            onConfirm={() => void confirm()}
          />
        ) : null}
      </div>
    </section>
  );
}

type ReportDetailsProps = {
  data: ReportResponse;
  note: string;
  onNoteChange: (note: string) => void;
  submitting: boolean;
  confirmError: Failure | null;
  onConfirm: () => void;
};

function ReportDetails({ data, note, onNoteChange, submitting, confirmError, onConfirm }: ReportDetailsProps) {
  const { report } = data;
  const link = safeHttpUrl(report.link);
  const isOpen = report.status === "open";

  return (
    <div className="mt-6">
      {data.environment === "staging" ? (
        <p className="flex justify-center">
          <span className="rounded-full bg-amber-200 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink">
            Staging
          </span>
        </p>
      ) : null}

      <h1 className="mt-6 text-center font-serif text-4xl leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl">
        {data.action_label}?
      </h1>

      <dl className="mt-10 divide-y divide-line border-y border-line text-base">
        <div className="py-4">
          <dt className="text-[0.72rem] uppercase tracking-[0.22em] text-muted">Reason</dt>
          <dd className="mt-1 text-ink">{report.reason}</dd>
        </div>
        <div className="py-4">
          <dt className="text-[0.72rem] uppercase tracking-[0.22em] text-muted">What was reported</dt>
          <dd className="mt-1 text-ink [overflow-wrap:anywhere]">{report.what}</dd>
        </div>
        {report.note ? (
          <div className="py-4">
            <dt className="text-[0.72rem] uppercase tracking-[0.22em] text-muted">Note</dt>
            <dd className="mt-1 whitespace-pre-line text-ink [overflow-wrap:anywhere]">{report.note}</dd>
          </div>
        ) : null}
        <div className="py-4 text-muted">
          <p>Reported by @{report.reporter}</p>
          <p className="mt-1 text-sm">{formatDate(report.created_at)}</p>
        </div>
      </dl>

      {link ? (
        <p className="mt-6 text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            Open what was reported
          </a>
        </p>
      ) : null}

      {isOpen ? (
        <div className="mt-10">
          <label htmlFor="moderation-note" className="text-[0.72rem] uppercase tracking-[0.22em] text-muted">
            Note for the record
          </label>
          <textarea
            id="moderation-note"
            value={note}
            onChange={(event) => onNoteChange(event.target.value)}
            maxLength={NOTE_LIMIT}
            rows={3}
            disabled={submitting}
            className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted focus:border-ink focus:outline-none disabled:opacity-60"
            placeholder="Optional"
          />
          <p className="mt-1 text-right text-xs text-muted">
            {note.length}/{NOTE_LIMIT}
          </p>
          <button
            type="button"
            onClick={onConfirm}
            disabled={submitting}
            className={`${buttonClass} mt-6 ${
              data.action === "suspend" ? "bg-[#9f1d1d] hover:bg-[#7f1515]" : "bg-ink hover:bg-ink/85"
            }`}
          >
            {data.action_label}
          </button>
          {confirmError ? (
            <p className="mt-4 text-center text-sm text-ink" role="alert">
              {confirmError.message}
            </p>
          ) : null}
        </div>
      ) : (
        <p className="mt-10 text-center text-base text-muted">
          This report was already handled ({report.status}
          {report.resolution_note ? `: ${report.resolution_note}` : ""})
        </p>
      )}
    </div>
  );
}
