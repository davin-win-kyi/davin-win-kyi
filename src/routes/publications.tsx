import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Davin Kyi" },
      {
        name: "description",
        content:
          "Research publications by Davin Kyi, including SonoCraftAR and TaskAudit.",
      },
      { property: "og:title", content: "Publications — Davin Kyi" },
      { property: "og:description", content: "Research publications by Davin Kyi." },
    ],
    links: [{ rel: "canonical", href: "/publications" }],
  }),
  component: Publications,
});

const publications = [
  {
    title: "SonoCraftAR",
    blurb:
      "An augmented reality system exploring expressive, spatially-aware sound and interaction design for AR experiences.",
    tags: ["Augmented Reality", "Interaction"],
  },
  {
    title: "TaskAudit",
    blurb:
      "A framework for auditing and evaluating task completion and accessibility errors in LLM-generated interfaces.",
    tags: ["Accessibility", "LLMs", "Evaluation"],
  },
];

function Publications() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <h1 className="text-3xl font-600 tracking-tight text-foreground sm:text-4xl">
        Publications
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Selected research projects spanning augmented reality and accessibility.
      </p>

      <div className="mt-10 space-y-5">
        {publications.map((p) => (
          <article
            key={p.title}
            className="group rounded-xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift sm:p-8"
          >
            <h2 className="flex items-center gap-2 text-xl font-600 text-foreground">
              {p.title}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{p.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="https://scholar.google.com/citations?user=oS2UUosAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          View on Google Scholar
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
