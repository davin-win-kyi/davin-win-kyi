import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import portrait from "@/assets/portrait.png";
import { RESUME_URL } from "@/lib/links";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Davin Kyi" },
      {
        name: "description",
        content:
          "Davin Kyi's education at the University of Washington and experience at the Makeability Lab, Amazon, and Capital One.",
      },
      { property: "og:title", content: "About — Davin Kyi" },
      { property: "og:description", content: "Education and experience of Davin Kyi." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const experience = [
  {
    org: "Makeability Lab",
    role: "Project Lead",
    location: "Seattle, WA",
    period: "Mar 2025 – Present",
    points: [
      "Developed a real-time AR translation system with font/background awareness, training an SVM on 1,500+ English fonts.",
      "Fine-tuning and benchmarking models using QLoRA on a synthetic SFT dataset of 1,000 accessibility examples.",
      "Built a spatially aware AR system for previewing online products in 3D via segmentation, inpainting, and 3D generation.",
    ],
  },
  {
    org: "Amazon",
    role: "Software Development Engineer Intern",
    location: "Seattle, WA",
    period: "Jun 2024 – Sep 2024",
    points: [
      "Designed a test application letting Amazon developers explore design variations through an LLM human-feedback loop.",
      "Prototyped a full-stack tool to test thousands of designs for Amazon.com, improving click-rate across many users.",
    ],
  },
  {
    org: "Capital One",
    role: "Software Engineer Intern",
    location: "San Francisco, CA",
    period: "Jun 2023 – Aug 2023",
    points: [
      "Built a large-scale Python application for 5M+ users, reducing processing time by 73%.",
      "Containerized and deployed services on Capital One infrastructure with Docker and Kubernetes.",
    ],
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div className="md:sticky md:top-24 md:self-start">
          <img
            src={portrait.url}
            alt="Portrait of Davin Kyi"
            width={600}
            height={600}
            loading="lazy"
            className="aspect-square w-full max-w-xs rounded-2xl object-cover shadow-soft"
          />
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <FileText className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">About</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            I'm a computer scientist focused on augmented reality, accessibility,
            and machine learning. I enjoy building systems that make everyday
            digital and physical experiences more usable for everyone.
          </p>

          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Education</h2>
            <div className="mt-4 rounded-xl border border-border bg-card p-6 shadow-soft">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">University of Washington</h3>
                <span className="text-sm text-muted-foreground">Expected Dec 2027</span>
              </div>
              <p className="mt-1 text-muted-foreground">
                M.S. in Computer Science &amp; Engineering · GPA 3.87 · Seattle, WA
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Coursework:</span> Machine
                Learning, Deep Learning, Computer Vision, Artificial Intelligence,
                Robotics, AR/VR, Databases
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Experience</h2>
            <div className="mt-4 space-y-4">
              {experience.map((e) => (
                <div
                  key={e.org}
                  className="rounded-xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{e.org}</h3>
                    <span className="text-sm text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-primary">{e.role}</p>
                  <p className="text-sm text-muted-foreground">{e.location}</p>
                  <ul className="mt-3 space-y-2">
                    {e.points.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
