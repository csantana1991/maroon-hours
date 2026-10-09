import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { BANDS, courses } from "@/data/courses";
import { Shell } from "@/components/shell";
import { useProgress } from "@/lib/progress";
import { courseHours, fmtHours } from "@/lib/study";

type CatalogSearch = { q: string; band: string };

export const Route = createFileRoute("/catalog")({
  validateSearch: (search: Record<string, unknown>): CatalogSearch => ({
    q: typeof search.q === "string" ? search.q : "",
    band: typeof search.band === "string" ? search.band : "all",
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const initial = Route.useSearch();
  const [q, setQ] = useState(initial.q);
  const [band, setBand] = useState(initial.band);

  useEffect(() => {
    setQ(initial.q);
    setBand(initial.band);
  }, [initial.q, initial.band]);

  const lectures = useProgress((s) => s.lectures);
  const labs = useProgress((s) => s.labs);
  const hydrated = useProgress((s) => s.hydrated);

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return courses.filter((course) => {
      if (band !== "all" && course.band !== band) return false;
      if (!needle) return true;
      const hay = [
        course.code,
        course.title,
        course.description,
        course.level,
        ...course.lectures.map((l) => l.title),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(needle);
    });
  }, [q, band]);

  return (
    <Shell>
      <p className="text-sm font-semibold tracking-widest text-brass uppercase">Catalog</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">Every course in the sequence</h1>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="sr-only" htmlFor="catalog-filter">
          Filter by name or topic
        </label>
        <input
          id="catalog-filter"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter by name, code, or lecture"
          className="h-11 w-full rounded-full border border-line bg-surface px-4 text-base outline-none focus:border-maroon sm:max-w-md"
        />
        <p className="text-sm text-muted">{shown.length} shown</p>
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        <BandChip active={band === "all"} onClick={() => setBand("all")}>
          All
        </BandChip>
        {BANDS.map((item) => (
          <BandChip key={item.id} active={band === item.id} onClick={() => setBand(item.id)}>
            Vol. {item.volume}
          </BandChip>
        ))}
      </div>

      <ul className="mt-4 divide-y divide-line border-y border-line">
        {shown.map((course) => {
          const hours = courseHours(
            course,
            (lectures[course.code] ?? []).length,
            (labs[course.code] ?? []).length,
          );
          const pct = Math.min(100, (hours.total / 108) * 100);
          return (
            <li key={course.code}>
              <Link
                to="/course/$code"
                params={{ code: course.code }}
                className="grid grid-cols-[4.5rem_1fr] gap-3 py-4 sm:grid-cols-[5rem_1fr_auto] sm:items-center"
              >
                <span className="font-display text-xl font-semibold text-maroon">{course.code}</span>
                <span className="min-w-0">
                  <span className="block font-semibold">{course.title}</span>
                  <span className="mt-1 block text-sm text-muted">
                    {course.level} · {course.lectures.length} sessions · {course.credits} cr
                  </span>
                  <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-ink/10 sm:hidden">
                    <span className="block h-full bg-maroon" style={{ width: `${hydrated ? pct : 0}%` }} />
                  </span>
                </span>
                <span className="hidden text-right text-sm text-muted sm:block">
                  {hydrated ? `${fmtHours(hours.total)} / 108h` : "108h"}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {shown.length === 0 && (
        <p className="mt-6 text-muted">Nothing matches. Try a course number, like 633 or “consensus”.</p>
      )}
    </Shell>
  );
}

function BandChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-10 shrink-0 rounded-full px-4 text-sm font-semibold ${
        active ? "bg-maroon text-bg" : "border border-line bg-surface text-ink"
      }`}
    >
      {children}
    </button>
  );
}

