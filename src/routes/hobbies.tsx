import { createFileRoute } from "@tanstack/react-router";
import lifting from "@/assets/lifting-gym.png.asset.json";
import boxing from "@/assets/boxing-gloves.png.asset.json";
import snowboarding from "@/assets/snowboarding.png";
import running from "@/assets/running.png";

export const Route = createFileRoute("/hobbies")({
  head: () => ({
    meta: [
      { title: "Hobbies — Davin Win Kyi" },
      {
        name: "description",
        content:
          "Outside of research, Davin Win Kyi enjoys snowboarding, running, lifting, and boxing.",
      },
      { property: "og:title", content: "Hobbies — Davin Win Kyi" },
      { property: "og:description", content: "Snowboarding, running, lifting, and boxing." },
    ],
    links: [{ rel: "canonical", href: "/hobbies" }],
  }),
  component: Hobbies,
});

const hobbies = [
  {
    name: "Snowboarding",
    image: snowboarding,
    blurb: "Carving down the mountain whenever the season allows.",
  },
  {
    name: "Running",
    image: running,
    blurb: "Logging miles around the neighborhood to clear my head.",
  },
  {
    name: "Lifting",
    image: lifting.url,
    blurb: "Chasing progressive overload and steady strength gains in the gym.",
  },
  {
    name: "Boxing",
    image: boxing.url,
    bw: true,
    blurb: "Footwork, conditioning, and the focus that comes with sparring.",
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

      <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2">
        {hobbies.map((h) => (
          <li
            key={h.name}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={h.image}
                alt={`${h.name} — one of Davin's hobbies`}
                loading="lazy"
                width={1024}
                height={768}
                className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105${
                  h.bw ? " grayscale" : ""
                }`}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground">{h.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.blurb}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
