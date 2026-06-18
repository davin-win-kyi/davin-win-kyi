import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Davin Kyi" },
      {
        name: "description",
        content: "Get in touch with Davin Kyi by email or on LinkedIn, GitHub, and Google Scholar.",
      },
      { property: "og:title", content: "Contact — Davin Kyi" },
      { property: "og:description", content: "Get in touch with Davin Kyi." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const channels = [
  { label: "Email", value: "davin123@uw.edu", href: "mailto:davin123@uw.edu", icon: Mail },
  {
    label: "LinkedIn",
    value: "in/davin-kyi",
    href: "https://www.linkedin.com/in/davin-kyi/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "davin-win-kyi",
    href: "https://github.com/davin-win-kyi",
    icon: Github,
  },
  {
    label: "Google Scholar",
    value: "Davin Kyi",
    href: "https://scholar.google.com/citations?user=oS2UUosAAAAJ&hl=en",
    icon: GraduationCap,
  },
];

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        I'm always happy to talk about research, collaborations, or new
        opportunities. Reach out through any of these channels.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {channels.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">{c.label}</span>
                <span className="block text-sm text-muted-foreground">{c.value}</span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
