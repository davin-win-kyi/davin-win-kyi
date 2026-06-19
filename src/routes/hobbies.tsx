import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import snowboardingVideo from "@/assets/snowboarding.mp4.asset.json";
import snowboardingPoster from "@/assets/snowboarding-poster.jpg.asset.json";
import runningVideo from "@/assets/running.mp4.asset.json";
import runningPoster from "@/assets/running-poster.jpg.asset.json";
import liftingVideo from "@/assets/lifting.mp4.asset.json";
import liftingPoster from "@/assets/lifting-poster.jpg.asset.json";
import boxingVideo from "@/assets/boxing.mp4.asset.json";
import boxingPoster from "@/assets/boxing-poster.jpg.asset.json";

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

type Hobby = {
  name: string;
  blurb: string;
  image?: string;
  video?: string;
  poster?: string;
  bw?: boolean;
};

const hobbies: Hobby[] = [
  {
    name: "Snowboarding",
    video: snowboardingVideo.url,
    poster: snowboardingPoster.url,
    blurb: "Carving down the mountain whenever the season allows.",
  },
  {
    name: "Running",
    video: runningVideo.url,
    poster: runningPoster.url,
    blurb: "Logging miles around the neighborhood to clear my head.",
  },
  {
    name: "Lifting",
    video: liftingVideo.url,
    poster: liftingPoster.url,
    blurb: "Chasing progressive overload and steady strength gains in the gym.",
  },
  {
    name: "Boxing",
    video: boxingVideo.url,
    poster: boxingPoster.url,
    blurb: "Footwork, conditioning, and the focus that comes with sparring.",
  },
];

function HobbyVideo({ name, video, poster }: { name: string; video: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  const play = () => {
    ref.current?.play().catch(() => {});
  };

  const pauseReset = () => {
    const el = ref.current;
    if (!el) return;
    el.pause();
  };

  return (
    <video
      ref={ref}
      src={video}
      poster={poster}
      controls
      muted
      loop
      playsInline
      preload="none"
      onMouseEnter={play}
      onMouseLeave={pauseReset}
      aria-label={`${name} — video of one of Davin's hobbies. Hover or press play to watch.`}
      className="h-full w-full object-cover"
    />
  );
}

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
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              {h.video ? (
                <HobbyVideo name={h.name} video={h.video} poster={h.poster} />
              ) : (
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
              )}
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
