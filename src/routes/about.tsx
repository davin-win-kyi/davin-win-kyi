import { createFileRoute } from "@tanstack/react-router";
import { FileText, GraduationCap, Briefcase } from "lucide-react";
import portrait from "@/assets/portrait.png";
import { RESUME_URL } from "@/lib/links";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Davin Win Kyi" },
      {
        name: "description",
        content:
          "Davin Win Kyi's education at the University of Washington and experience at the Makeability Lab, DUB Group, Amazon, and Capital One.",
      },
      { property: "og:title", content: "About — Davin Win Kyi" },
      { property: "og:description", content: "Education and experience of Davin Win Kyi." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  location?: string;
  points?: string[];
};

const education: TimelineItem[] = [
  {
    period: "2024 – 2027",
    title: "University of Washington",
    subtitle: "M.S. in Computer Science & Engineering · GPA 3.87",
    location: "Seattle, WA · Expected Dec 2027",
    points: [
      "Coursework: Machine Learning, Deep Learning, Computer Vision, Artificial Intelligence, Robotics, AR/VR, Databases.",
    ],
  },
  {
    period: "2021 – 2024",
    title: "University of Washington",
    subtitle: "B.S. in Computer Science",
    location: "Seattle, WA",
    points: [
      "Built a strong foundation in algorithms, systems, and human-computer interaction.",
    ],
  },
];

const experience: TimelineItem[] = [
  {
    period: "Mar 2025 – Present",
    title: "Makeability Lab",
    subtitle: "Project Lead",
    location: "Seattle, WA",
    points: [
      "Developed a real-time AR translation system with font/background awareness, training an SVM on 1,500+ English fonts.",
      "Fine-tuning and benchmarking models using QLoRA on a synthetic SFT dataset of 1,000 accessibility examples.",
      "Built a spatially aware AR system for previewing online products in 3D via segmentation, inpainting, and 3D generation.",
    ],
  },
  {
    period: "2024 – Present",
    title: "DUB Group",
    subtitle: "Research Affiliate",
    location: "University of Washington",
    points: [
      "Active member of UW's interdisciplinary HCI community, collaborating across labs on accessibility and AR research.",
    ],
  },
  {
    period: "Jun 2024 – Sep 2024",
    title: "Amazon",
    subtitle: "Software Development Engineer Intern",
    location: "Seattle, WA",
    points: [
      "Designed a test application letting Amazon developers explore design variations through an LLM human-feedback loop.",
      "Prototyped a full-stack tool to test thousands of designs for Amazon.com, improving click-rate across many users.",
    ],
  },
  {
    period: "2023 – 2024",
    title: "Research Internship",
    subtitle: "Undergraduate Research Intern",
    location: "University of Washington",
    points: [
      "Conducted applied research at the intersection of augmented reality, accessibility, and machine learning.",
    ],
  },
  {
    period: "Jun 2023 – Aug 2023",
    title: "Capital One",
    subtitle: "Software Engineer Intern",
    location: "San Francisco, CA",
    points: [
      "Built a large-scale Python application for 5M+ users, reducing processing time by 73%.",
      "Containerized and deployed services on Capital One infrastructure with Docker and Kubernetes.",
    ],
  },
];

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mt-6 pl-8">
      <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden />
      <ol className="space-y-8">
        {items.map((item) => (
          <li key={item.period + item.title} className="relative">
            <span
              className="absolute -left-[29px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary ring-1 ring-border"
              aria-hidden
            />
            <p className="font-serif text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {item.period}
            </p>
            <div className="mt-2 rounded-xl border border-border bg-card p-6 shadow-soft">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="mt-0.5 text-sm font-medium text-foreground">{item.subtitle}</p>
              {item.location && (
                <p className="text-sm text-muted-foreground">{item.location}</p>
              )}
              {item.points && (
                <ul className="mt-3 space-y-2">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="blob blob-animated absolute -inset-4 -z-10 bg-secondary" />
            <img
              src={portrait}
              alt="Portrait of Davin Win Kyi"
              width={600}
              height={600}
              loading="lazy"
              className="blob blob-animated aspect-square w-full object-cover shadow-lift"
              style={{ objectPosition: "50% 20%" }}
            />
          </div>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
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
            <Timeline items={education} />
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Experience</h2>
            <Timeline items={experience} />
          </section>
        </div>
      </div>
    </div>
  );
}
