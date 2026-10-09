import { createFileRoute, Link } from "@tanstack/react-router";
import { BANDS, COURSE_HOURS, courses } from "@/data/courses";
import { Shell } from "@/components/shell";
import { useProgress } from "@/lib/progress";
import { courseHours, fmtHours, missingPrereqs } from "@/lib/study";

export const Route = createFileRoute("/plan")({
  component: PlanPage,
});

function PlanPage() {
  const plan = useProgress((s) => s.plan);
  const weekly = useProgress((s) => s.weekly);
  const lectures = useProgress((s) => s.lectures);
  const labs = useProgress((s) => s.labs);
  const hydrated = useProgress((s) => s.hydrated);
  const togglePlan = useProgress((s) => s.togglePlan);
  const setWeekly = useProgress((s) => s.setWeekly);

  const selected = courses.filter((c) => plan.includes(c.code));
  const credits = selected.reduce((n, c) => n + c.credits, 0);
  const remaining = selected.reduce((sum, course) => {
    const done = courseHours(
      course,
      (lectures[course.code] ?? []).length,
      (labs[course.code] ?? []).length,
    ).total;
    return sum + Math.max(0, COURSE_HOURS.total - done);
  }, 0);
  const weeks = weekly > 0 ? Math.ceil(remaining / weekly) : 0;

  function exportPlan() {
    const lines = ["# Maroon Hours plan", "", `Pace: ${weekly} hours per week`, ""];
    for (const course of selected) {
      lines.push(
        `## CSCE ${course.code} — ${course.title}`,
        "",
        course.description,
        "",
        `Prerequisites: ${course.prereqs}`,
        `Credits: ${course.credits}`,
        "",
      );
    }
    lines.push(`Total credits: ${credits} of 36`, `Hours still ahead: ${fmtHours(remaining)}`);
    const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "maroon-hours-plan.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Shell>
      <p className="text-sm font-semibold tracking-widest text-brass uppercase">Degree plan</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">Thirty-six credits, on your calendar.</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Twelve 3-credit courses is the usual load. CSCE 632 can be taken as a 6-credit capstone if you
        want the inclusive-computing anchor to carry more of the degree.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-line bg-surface p-4">
          <p className="text-sm text-muted">Credits</p>
          <p className="font-display text-3xl text-maroon">{hydrated ? credits : "—"}</p>
          <p className="text-sm text-muted">of 36</p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-4">
          <p className="text-sm text-muted">Hours ahead</p>
          <p className="font-display text-3xl text-maroon">{hydrated ? fmtHours(remaining) : "—"}</p>
          <p className="text-sm text-muted">{hydrated && selected.length ? `${weeks} weeks` : "pick courses"}</p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-4">
          <label htmlFor="pace" className="text-sm text-muted">
            Hours per week: {hydrated ? weekly : "—"}
          </label>
          <input
            id="pace"
            type="range"
            min={4}
            max={24}
            step={1}
            value={weekly}
            onChange={(e) => setWeekly(Number(e.target.value))}
            className="mt-4 w-full accent-maroon"
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="button"
          onClick={exportPlan}
          disabled={selected.length === 0}
          className="h-11 rounded-full border border-line bg-surface px-5 text-sm font-semibold disabled:opacity-40"
        >
          Download plan
        </button>
      </div>

      {selected.length === 0 ? (
        <p className="mt-8 text-muted">
          Your plan is empty. Add courses from the catalog, or start with the bridge course,{" "}
          <Link to="/course/$code" params={{ code: "603" }} className="font-semibold text-maroon">
            CSCE 603
          </Link>
          .
        </p>
      ) : (
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {selected.map((course) => {
            const gaps = missingPrereqs(course, plan);
            const hours = courseHours(
              course,
              (lectures[course.code] ?? []).length,
              (labs[course.code] ?? []).length,
            );
            return (
              <li key={course.code} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Link to="/course/$code" params={{ code: course.code }} className="font-semibold">
                    CSCE {course.code} · {course.title}
                  </Link>
                  <p className="text-sm text-muted">
                    {fmtHours(hours.total)} / 108h · {course.credits} cr
                  </p>
                  {gaps.length > 0 && (
                    <p className="mt-1 text-sm text-brass">
                      Plan is missing {gaps.map((g) => `CSCE ${g}`).join(", ")}.
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => togglePlan(course.code)}
                  className="h-11 shrink-0 rounded-full border border-line px-4 text-sm font-semibold"
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <h2 className="mt-10 font-display text-2xl font-semibold">Add from a volume</h2>
      <div className="mt-4 space-y-6">
        {BANDS.map((band) => (
          <section key={band.id}>
            <h3 className="text-sm font-semibold tracking-widest text-brass uppercase">
              Vol. {band.volume} · {band.label}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {courses
                .filter((c) => c.band === band.id && !plan.includes(c.code))
                .map((course) => (
                  <button
                    key={course.code}
                    type="button"
                    onClick={() => togglePlan(course.code)}
                    className="h-10 rounded-full border border-line bg-surface px-3 text-sm"
                  >
                    {course.code} {shortTitle(course.title)}
                  </button>
                ))}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  );
}

function shortTitle(title: string) {
  return title.length > 28 ? `${title.slice(0, 26)}…` : title;
}

