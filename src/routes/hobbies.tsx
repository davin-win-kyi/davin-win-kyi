import { createFileRoute } from "@tanstack/react-router";
import lifting from "@/assets/lifting.jpg";
import boxing from "@/assets/boxing.jpg";
import snowboarding from "@/assets/snowboarding.png";
import running from "@/assets/running.png";

export const Route = createFileRoute("/hobbies")({
  head: () => ({
    meta: [
      { title: "Hobbies — Davin Kyi" },
      {
        name: "description",
        content:
          "Outside of research, Davin Kyi enjoys lifting, boxing, snowboarding, and running.",
      },
      { property: "og:title", content: "Hobbies — Davin Kyi" },
      { property: "og:description", content: "Lifting, boxing, snowboarding, and running." },
    ],
    links: [{ rel: "canonical", href: "/hobbies" }],
  }),
  component: Hobbies,
});

const hobbies = [
  {
    name: "Lifting",
    image: lifting,
    blurb: "Chasing progressive overload and steady strength gains in the gym.",
  },
  {
    name: "Boxing",
    image: boxing,
    blurb: "Footwork, conditioning, and the focus that comes with sparring.",
  },
  {
    name: "Snowboarding",
    image: snowboarding.url,
    blurb: "Carving down the mountain whenever the season allows.",
  },
  {
    name: "Running",
    image: running.url,
    blurb: "Logging miles around the neighborhood to clear my head.",
  },
];

function Hobbies() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Hobbies
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        When I'm not in the lab, you'll usually find me staying active.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {hobbies.map((h) => (
          <div
            key={h.name}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={h.image}
                alt={h.name}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground">{h.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
