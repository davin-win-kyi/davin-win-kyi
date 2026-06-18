import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github, Linkedin, GraduationCap, Send } from "lucide-react";
import { z } from "zod";
import { EMAIL } from "@/lib/links";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Davin Win Kyi" },
      {
        name: "description",
        content: "Get in touch with Davin Win Kyi by email or on LinkedIn, GitHub, and Google Scholar.",
      },
      { property: "og:title", content: "Contact — Davin Win Kyi" },
      { property: "og:description", content: "Get in touch with Davin Win Kyi." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const channels = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
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
    value: "Davin Win Kyi",
    href: "https://scholar.google.com/citations?user=oS2UUosAAAAJ&hl=en",
    icon: GraduationCap,
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please enter a message").max(1000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Website message from ${result.data.name}`);
    const body = encodeURIComponent(
      `${result.data.message}\n\n— ${result.data.name} (${result.data.email})`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        I'm always happy to talk about research, collaborations, or new
        opportunities. Send me a message below or reach out through any channel.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
          noValidate
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-1.5 w-full resize-y rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
                placeholder="What would you like to talk about?"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              Send message
            </button>
          </div>
        </form>

        {/* Channels */}
        <div className="grid content-start gap-4">
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
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-secondary text-foreground">
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
    </div>
  );
}
