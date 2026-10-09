import { createFileRoute, Link } from "@tanstack/react-router";
import { BANDS, COURSE_HOURS, courses } from "@/data/courses";
import { Shell } from "@/components/shell";
import { useProgress } from "@/lib/progress";
import { courseHours, fmtHours, resumeTarget } from "@/lib/study";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const hydrated = useProgress((s) => s.hydrated);
  const lectures = useProgress((s) => s.lectures);
  const labs = useProgress((s) => s.labs);
  const plan = useProgress((s) => s.plan);
  const weekly = useProgress((s) => s.weekly);

  const logged = courses.reduce((sum, course) => {
    const h = courseHours(
      course,
      (lectures[course.code] ?? []).length,
      (labs[course.code] ?? []).length,
    );
    return sum + h.total;
  }, 0);

  const lecturesDone = Object.values(lectures).reduce((n, list) => n + list.length, 0);
  const planCredits = plan.reduce((n, code) => n + (courses.find((c) => c.code === code)?.credits ?? 0), 0);
  const resume = resumeTarget(plan, lectures);
  const planHours = plan.reduce((sum, code) => {
    const course = courses.find((c) => c.code === code);
    if (!course) return sum;
    const done = courseHours(
      course,
      (lectures[code] ?? []).length,
      (labs[code] ?? []).length,
    ).total;
    return sum + Math.max(0, COURSE_HOURS.total - done);
  }, 0);
  const weeks = weekly > 0 ? Math.ceil(planHours / weekly) : 0;

  return (
    <Shell>
      <p className="text-sm font-semibold tracking-widest text-brass uppercase">Texas A&M · CSCE</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">
        The graduate sequence, from 603 to the capstone.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Four volumes, fifty courses. Each one is a 3-credit studio: 24 hours of lecture, 36 of reading,
        48 in the lab. Mark a session, keep a note, sit a five-question check, and build a 36-credit plan.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Stat label="Hours logged" value={hydrated ? fmtHours(logged) : "—"} hint="across the catalog" />
        <Stat label="Sessions done" value={hydrated ? String(lecturesDone) : "—"} hint="of 513 lectures" />
        <Stat
          label="Plan"
          value={hydrated ? `${planCredits}` : "—"}
          hint={hydrated && planHours > 0 ? `${weeks} weeks at ${weekly}h` : "of 36 credits"}
        />
      </div>

      <section className="mt-8 rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <p className="text-sm font-semibold text-brass">Continue</p>
        <h2 className="mt-1 font-display text-2xl font-semibold">
          CSCE {resume.course.code} · {resume.course.lectures[resume.index].title}
        </h2>
        <p className="mt-2 text-muted">{resume.course.title}</p>
        <Link
          to="/course/$code/lecture/$n"
          params={{ code: resume.course.code, n: String(resume.index + 1) }}
          className="mt-4 inline-flex h-11 items-center rounded-full bg-maroon px-5 text-sm font-semibold text-bg"
        >
          Open session
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold">Volumes</h2>
        <ol className="mt-4 divide-y divide-line border-y border-line">
          {BANDS.map((band) => {
            const count = courses.filter((c) => c.band === band.id).length;
            return (
              <li key={band.id}>
                <Link
                  to="/catalog"
                  search={{ q: "", band: band.id }}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <span>
                    <span className="font-display text-xl text-maroon">Vol. {band.volume}</span>
                    <span className="mt-1 block text-sm text-muted">{band.blurb}</span>
                  </span>
                  <span className="shrink-0 text-right text-sm font-semibold">
                    {band.label}
                    <span className="mt-1 block font-normal text-muted">{count} courses</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </Shell>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-line bg-surface px-4 py-4">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 font-display text-3xl font-semibold text-maroon">{value}</p>
      <p className="text-sm text-muted">{hint}</p>
    </div>
  );
}
