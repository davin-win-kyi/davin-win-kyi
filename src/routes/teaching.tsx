import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching — Davin Kyi" },
      {
        name: "description",
        content:
          "Davin Kyi has been a teaching assistant for CSE 473, CSE 340, and CSE 414 at the University of Washington.",
      },
      { property: "og:title", content: "Teaching — Davin Kyi" },
      { property: "og:description", content: "Teaching assistant experience of Davin Kyi." },
    ],
    links: [{ rel: "canonical", href: "/teaching" }],
  }),
  component: Teaching,
});

const courses = [
  {
    code: "CSE 473",
    name: "Introduction to Artificial Intelligence",
    role: "Teaching Assistant",
  },
  {
    code: "CSE 340",
    name: "Interaction Programming",
    role: "Teaching Assistant",
  },
  {
    code: "CSE 414",
    name: "Introduction to Database Systems",
    role: "Teaching Assistant",
  },
];

function Teaching() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Teaching
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        I've supported students as a teaching assistant at the University of
        Washington across artificial intelligence, interaction programming, and
        databases — through sections, office hours, and course materials.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {courses.map((c) => (
          <div
            key={c.code}
            className="rounded-xl border border-border bg-card p-6 shadow-soft"
          >
            <p className="font-serif text-2xl font-semibold text-primary">{c.code}</p>
            <h2 className="mt-1 text-lg font-semibold text-foreground">{c.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{c.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
