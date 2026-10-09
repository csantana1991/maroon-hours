import { createFileRoute, Link } from "@tanstack/react-router";
import { BANDS, getCourse } from "@/data/courses";
import { Shell } from "@/components/shell";
import { useProgress } from "@/lib/progress";
import { courseHours, fmtHours, has } from "@/lib/study";

export const Route = createFileRoute("/course/$code/")({
  component: CoursePage,
});

const EMPTY: number[] = [];

function CoursePage() {
  const { code } = Route.useParams();
  const course = getCourse(code);
  const lecturesDone = useProgress((s) => s.lectures[code]) ?? EMPTY;
  const labsDone = useProgress((s) => s.labs[code]) ?? EMPTY;
  const inPlan = useProgress((s) => s.plan.includes(code));
  const quiz = useProgress((s) => s.quizzes[code]);
  const hydrated = useProgress((s) => s.hydrated);
  const togglePlan = useProgress((s) => s.togglePlan);

  if (!course) {
    return (
      <Shell>
        <h1 className="font-display text-3xl">No course {code}</h1>
        <Link to="/catalog" search={{ q: "", band: "all" }} className="mt-4 inline-block text-maroon">
          Back to the catalog
        </Link>
      </Shell>
    );
  }

  const band = BANDS.find((b) => b.id === course.band);
  const hours = courseHours(course, lecturesDone.length, labsDone.length);

  return (
    <Shell>
      <p className="text-sm font-semibold text-brass">
        Vol. {band?.volume} · {course.level} · {course.credits} credits
      </p>
      <h1 className="mt-2 font-display text-4xl leading-tight font-semibold">
        CSCE {course.code}
        <span className="mt-1 block text-3xl">{course.title}</span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{course.description}</p>
      {course.aside && <p className="mt-3 max-w-2xl text-sm text-brass">{course.aside}</p>}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => togglePlan(course.code)}
          className={`h-11 rounded-full px-5 text-sm font-semibold ${
            inPlan ? "bg-maroon text-bg" : "border border-maroon text-maroon"
          }`}
        >
          {inPlan ? "In your plan" : "Add to plan"}
        </button>
        <Link
          to="/course/$code/quiz"
          params={{ code: course.code }}
          className="inline-flex h-11 items-center rounded-full border border-line bg-surface px-5 text-sm font-semibold"
        >
          {quiz && hydrated ? `Check ${quiz.score}/${quiz.total}` : "Five-question check"}
        </Link>
      </div>

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        <Fact term="Prerequisites" detail={course.prereqs} />
        <Fact term="Peer programs" detail={course.equivalents.join(" · ")} />
        <Fact
          term="Hours logged"
          detail={hydrated ? `${fmtHours(hours.total)} of 108` : "108 hour course"}
        />
      </dl>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink/10">
        <div
          className="h-full bg-maroon"
          style={{ width: `${hydrated ? Math.min(100, (hours.total / 108) * 100) : 0}%` }}
        />
      </div>

      <h2 className="mt-10 font-display text-2xl font-semibold">Sessions</h2>
      <ol className="mt-3 divide-y divide-line border-y border-line">
        {course.lectures.map((lecture, index) => {
          const studied = hydrated && has(lecturesDone, index);
          const lab = hydrated && has(labsDone, index);
          return (
            <li key={lecture.title}>
              <Link
                to="/course/$code/lecture/$n"
                params={{ code: course.code, n: String(index + 1) }}
                className="flex items-start justify-between gap-4 py-4"
              >
                <span>
                  <span className="text-sm text-muted">
                    {String(index + 1).padStart(2, "0")}
                    {studied ? " · studied" : ""}
                    {lab ? " · lab" : ""}
                  </span>
                  <span className="mt-1 block font-semibold">{lecture.title}</span>
                </span>
                <span className="pt-1 text-sm text-maroon">Open</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </Shell>
  );
}

function Fact({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4">
      <dt className="text-sm font-semibold text-brass">{term}</dt>
      <dd className="mt-1 text-sm leading-relaxed">{detail}</dd>
    </div>
  );
}
