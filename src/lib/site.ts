export const site = {
  name: "Purselo",
  legalName: "Purselo LLC",
  email: "contact@purselo.app",
  url: "https://purselo.app",
  year: 2026,
  tagline: "Your Pursuits, One Selo",
  description:
    "Purselo brings every hobby and passion you share into one customizable place, your Selo. Coming soon to iOS.",
} as const;

export const app = {
  name: "Purselo",
  operator: "Purselo LLC",
  location: "Florida, United States",
  supportEmail: "support@purselo.app",
} as const;

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;
