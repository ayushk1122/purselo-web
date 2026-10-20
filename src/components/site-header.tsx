import Link from "next/link";
import { Wordmark } from "@/components/brand";
import { Container } from "@/components/container";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="-ml-1 inline-flex min-h-11 items-center px-1 transition-opacity duration-300 hover:opacity-70"
        >
          <Wordmark alt={site.name} priority className="w-[6.5rem] md:w-[7.75rem]" />
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center px-2 text-[0.92rem] text-muted transition-colors duration-300 hover:text-ink sm:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
