import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { BookOpen, Compass, Library } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { useProgress } from "@/lib/progress";

const NAV = [
  { to: "/", label: "Studio", icon: Compass },
  { to: "/catalog", label: "Catalog", icon: Library },
  { to: "/plan", label: "Plan", icon: BookOpen },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  useEffect(() => {
    let live = true;
    Promise.resolve(useProgress.persist.rehydrate()).finally(() => {
      if (live) useProgress.setState({ hydrated: true });
    });
    return () => {
      live = false;
    };
  }, []);

  function onSearch(e: FormEvent) {
    e.preventDefault();
    void navigate({ to: "/catalog", search: { q: q.trim(), band: "all" } });
  }

  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="sticky top-0 z-30 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <Link to="/" className="flex shrink-0 items-baseline gap-2">
            <span className="font-display text-xl font-semibold tracking-tight text-maroon">
              Maroon Hours
            </span>
            <span className="hidden text-sm text-muted sm:inline">CSCE studio</span>
          </Link>
          <form onSubmit={onSearch} className="ml-auto min-w-0 flex-1 sm:max-w-xs">
            <label className="sr-only" htmlFor="studio-search">
              Search courses
            </label>
            <input
              id="studio-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search courses"
              className="h-11 w-full rounded-full border border-line bg-surface px-4 text-base text-ink outline-none placeholder:text-muted focus:border-maroon"
            />
          </form>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl">
        <aside className="sticky top-20 hidden w-48 shrink-0 self-start border-r border-line px-3 py-6 md:block">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  search={item.to === "/catalog" ? { q: "", band: "all" } : undefined}
                  className={`flex h-11 items-center rounded-full px-3 text-sm font-semibold ${
                    active ? "bg-maroon text-bg" : "text-ink hover:bg-surface"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <p className="mt-8 px-3 text-sm leading-relaxed text-muted">
            Fifty graduate courses. 108 hours each. A 36-credit plan you can actually finish.
          </p>
        </aside>
        <main className="min-w-0 flex-1 px-4 py-6 pb-28 md:px-8 md:pb-12">{children}</main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/95 backdrop-blur md:hidden">
        <ul className="mx-auto grid max-w-lg grid-cols-3">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  search={item.to === "/catalog" ? { q: "", band: "all" } : undefined}
                  className={`flex h-16 flex-col items-center justify-center gap-1 text-xs font-semibold ${
                    active ? "text-maroon" : "text-muted"
                  }`}
                >
                  <Icon className="size-5" aria-hidden />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
