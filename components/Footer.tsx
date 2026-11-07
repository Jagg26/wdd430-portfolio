import { cacheLife } from "next/cache";

export default async function Footer() {
  "use cache";
  cacheLife("hours");

  return (
    <footer className="border-t border-slate-300 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-7 text-sm text-slate-600 sm:px-10">
        <p>Copyright © {new Date().getFullYear()} John García. All rights reserved.</p>
        <a href="https://github.com/Jagg26" className="inline-flex min-h-11 items-center font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">GitHub <span aria-hidden="true" className="ml-2">↗</span></a>
      </div>
    </footer>
  );
}
