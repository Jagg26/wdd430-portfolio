import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-300 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <Link href="/" className="inline-flex min-h-11 items-center gap-3 font-bold tracking-tight text-slate-950">
          <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-lg bg-teal-800 font-mono text-sm text-white">JG</span>
          <span id="header-title">John García</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex gap-2 text-sm font-semibold text-slate-700 sm:gap-5">
            <li><Link href="/" className="inline-flex min-h-11 items-center rounded px-3 hover:bg-slate-100 hover:text-teal-800">Home</Link></li>
            <li><Link href="/about" className="inline-flex min-h-11 items-center rounded px-3 hover:bg-slate-100 hover:text-teal-800">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
