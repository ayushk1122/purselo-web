import Link from "next/link";
import { Wordmark } from "@/components/brand";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-paper/15 bg-ink text-paper">
      <Container className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div>
          <Wordmark tone="paper" alt={site.name} className="w-36 md:w-40" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand">
            Every pursuit, in one Selo.
          </p>
        </div>
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-sand">Contact</p>
          <address className="mt-4 not-italic">
            <a
              href={`mailto:${site.email}`}
              className="text-base text-paper underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-paper"
            >
              {site.email}
            </a>
          </address>
        </div>
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-sand">Pages</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-base text-paper underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="border-t border-paper/15 py-6">
        <p className="text-sm text-sand">
          © {site.year} {site.legalName}
        </p>
      </Container>
    </footer>
  );
}
