import Link from "next/link";
import ProjectList from "@/components/ProjectList";
import type { ProjectCardProps } from "@/components/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Budget & Expenses",
    description: "A budget manager for setting a spending limit, recording expenses, and keeping track of the remaining balance.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Jagg26/Budget",
  },
  {
    title: "Patient Administrator",
    description: "A React application for recording patient appointments through a form and organizing them in a reusable appointment list.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Jagg26/patientAdministrator",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 sm:px-10 sm:py-20">
      <section aria-labelledby="intro-title" className="max-w-3xl pb-16 sm:pb-24">
        <p className="mb-5 font-mono text-sm font-semibold tracking-widest text-teal-800 uppercase">John García / Developer portfolio</p>
        <h1 id="intro-title" className="text-4xl leading-tight font-bold tracking-tight text-slate-950 sm:text-6xl">Learning by building.<br />One project at a time.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">I’m a full-stack developer exploring Next.js and React. This is a selection of my work turning ideas into practical web applications.</p>
        <Link href="/about" className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-teal-800 px-5 py-3 font-semibold text-white transition-colors hover:bg-teal-900">More about me <span aria-hidden="true" className="ml-3">→</span></Link>
      </section>
      <section aria-labelledby="projects-title" className="border-t border-slate-300 pt-8">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="projects-title" className="text-2xl font-bold tracking-tight text-slate-950">Selected projects</h2>
          <p className="font-mono text-sm text-slate-600">01 — 02 / React applications</p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
