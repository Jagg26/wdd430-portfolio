interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
}

export default function SkillCard({ title, description, skills }: SkillCardProps) {
  return (
    <article className="rounded-xl border border-slate-300 bg-white p-6 sm:p-8">
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => <li key={skill} className="rounded bg-teal-50 px-3 py-2 font-mono text-sm text-teal-900">{skill}</li>)}
      </ul>
    </article>
  );
}
