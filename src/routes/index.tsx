import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, GraduationCap, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png.asset.json";
import { RESUME_URL } from "@/lib/links";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Davin Kyi — CS Researcher at the University of Washington" },
      {
        name: "description",
        content:
          "Davin Kyi is an M.S. Computer Science student at the University of Washington working on AR, accessibility, and machine learning.",
      },
      { property: "og:title", content: "Davin Kyi" },
      { property: "og:description", content: "CS researcher at the University of Washington." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="hero-gradient">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <GraduationCap className="h-3.5 w-3.5 text-primary" />
            University of Washington · CSE
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Davin Kyi
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
            M.S. Computer Science &amp; Engineering student researching augmented
            reality, accessibility, and machine learning at the Makeability Lab.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Publications
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a
              href="https://scholar.google.com/citations?user=oS2UUosAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Google Scholar
            </a>
            <a
              href="https://www.linkedin.com/in/davin-kyi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/davin-win-kyi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
          <img
            src={heroImage}
            alt="Davin Kyi standing on a rock by an alpine lake"
            width={900}
            height={1200}
            className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lift"
          />
        </div>
      </div>
    </section>
  );
}
