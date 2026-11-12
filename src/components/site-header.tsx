import Link from "next/link";
import { AppStoreBadge } from "@/components/app-store-badge";
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
        <nav aria-label="Primary" className="flex items-center">
          <ul className="hidden items-center gap-3 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center px-3 text-[0.92rem] text-muted transition-colors duration-300 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <AppStoreBadge className="-mr-2.5 sm:ml-1" />
        </nav>
      </Container>
    </header>
  );
}
