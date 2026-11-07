import type { Metadata } from "next";
import Link from "next/link";
import SkillCard from "@/components/SkillCard";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about John García’s web development projects and current studies.",
};

export default function About() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 sm:px-10 sm:py-20">
      <p className="mb-5 font-mono text-sm font-semibold tracking-widest text-teal-800 uppercase">A little background</p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">About me</h1>
      <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-slate-600">
        <p>I’m John García, a full-stack developer. I enjoy building practical web applications, from managing a budget to organizing patient appointments.</p>
        <p>For WDD 430, I’m developing this portfolio with Next.js, TypeScript, and Tailwind CSS. I’m learning how Server Components, reusable props, and file-based routing fit together.</p>
      </div>
      <section aria-labelledby="skills-title" className="mt-12">
        <h2 id="skills-title" className="mb-6 text-2xl font-bold text-slate-950">My development toolkit</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <SkillCard title="Building for the web" description="Tools I use to create interfaces and compose reusable application components." skills={["HTML", "CSS", "JavaScript", "React"]} />
          <SkillCard title="Currently exploring" description="The tools and concepts I’m practicing in this portfolio project." skills={["Next.js", "TypeScript", "Tailwind CSS", "Server Components"]} />
        </div>
      </section>
      <Link href="/" className="mt-10 inline-flex min-h-11 items-center font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">Explore my projects <span aria-hidden="true" className="ml-2">→</span></Link>
    </main>
  );
}
