export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-300 border-t-4 border-t-teal-800 bg-white p-6 sm:p-8">
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
      <div className="mt-6">
        <p className="mb-2 text-xs font-semibold tracking-wider text-slate-600 uppercase">Technologies</p>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li key={technology} className="rounded bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700">{technology}</li>
          ))}
        </ul>
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center self-start font-semibold text-teal-800 underline decoration-teal-800/40 underline-offset-4 hover:decoration-teal-800">View project<span className="sr-only">: {title} (opens in a new tab)</span><span aria-hidden="true" className="ml-2">↗</span></a>
      )}
    </article>
  );
}
