"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

// Netlify only accepts the form and field names declared in public/__forms.html.
const FORM_NAME = "beta";
const FORM_ENDPOINT = "/__forms.html";

const fieldClass =
  "mt-2 block w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors duration-300 focus:border-ink focus:outline-none";
const labelClass = "text-[0.72rem] uppercase tracking-[0.22em] text-muted";

type Status = "idle" | "sending" | "sent" | "error";

export function BetaForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "sent" || status === "error") resultRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const body = new URLSearchParams({
      "form-name": FORM_NAME,
      "bot-field": String(form.get("bot-field") ?? ""),
      name,
      email: String(form.get("email") ?? "").trim(),
      reason: String(form.get("reason") ?? "").trim(),
      eligible: form.get("eligible") ? "Yes" : "",
    });

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Form returned ${response.status}`);
      setFirstName(name.split(/\s+/)[0] ?? "");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" className="focus:outline-none">
        <p className="font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          Thanks{firstName ? `, ${firstName}` : ""}. <em className="italic">Your application is in.</em>
        </p>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          If there&rsquo;s a spot for you, Apple will email you a TestFlight invitation at the
          address you entered.
        </p>
      </div>
    );
  }

  return (
    <form name={FORM_NAME} onSubmit={handleSubmit} className="space-y-6">
      <p className="hidden" aria-hidden="true">
        <label>
          Leave this empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Name</span>
          <input
            name="name"
            type="text"
            required
            maxLength={80}
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Email</span>
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            spellCheck={false}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>Why you&rsquo;d like to join, or how you heard about Purselo</span>
        <textarea
          name="reason"
          required
          rows={5}
          maxLength={1000}
          className={`${fieldClass} resize-y`}
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-ink">
        <input
          name="eligible"
          type="checkbox"
          required
          className="mt-0.5 h-5 w-5 shrink-0 accent-ink"
        />
        I&rsquo;m 13 or older and live in the United States.
      </label>

      {status === "error" ? (
        <div ref={resultRef} tabIndex={-1} role="alert" className="text-sm leading-relaxed text-ink focus:outline-none">
          Your application didn&rsquo;t go through. Please try again, or email{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
          .
        </div>
      ) : null}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-ink px-8 text-sm font-medium tracking-[0.02em] text-paper transition-colors duration-300 hover:bg-ink/85 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending\u2026" : "Apply for the beta"}
        </button>
        <p className="text-xs leading-relaxed text-muted">
          We use this only to review your application and, if you&rsquo;re invited, to send a
          TestFlight invitation. See our{" "}
          <Link href="/privacy#beta" className="text-ink underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
