import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { getCourse } from "@/data/courses";
import { Shell } from "@/components/shell";
import { useProgress } from "@/lib/progress";
import { has, lessonCopy } from "@/lib/study";

export const Route = createFileRoute("/course/$code/lecture/$n")({
  component: LecturePage,
});

function LecturePage() {
  const { code, n } = Route.useParams();
  const course = getCourse(code);
  const index = Number(n) - 1;
  const lectureOn = useProgress((s) => has(s.lectures[code], index));
  const labOn = useProgress((s) => has(s.labs[code], index));
  const note = useProgress((s) => s.notes[`${code}-${index}`] ?? "");
  const toggleLecture = useProgress((s) => s.toggleLecture);
  const toggleLab = useProgress((s) => s.toggleLab);
  const setNote = useProgress((s) => s.setNote);
  const [reveal, setReveal] = useState(false);

  if (!course || !course.lectures[index]) {
    return (
      <Shell>
        <h1 className="font-display text-3xl">That session isn’t in the studio.</h1>
        <Link to="/catalog" search={{ q: "", band: "all" }} className="mt-4 inline-block text-maroon">
          Catalog
        </Link>
      </Shell>
    );
  }

  const copy = lessonCopy(course, index);
  const prev = index > 0 ? index : null;
  const next = index < course.lectures.length - 1 ? index + 2 : null;

  return (
    <Shell>
      <Link to="/course/$code" params={{ code: course.code }} className="text-sm font-semibold text-maroon">
        CSCE {course.code} · {course.title}
      </Link>
      <p className="mt-3 text-sm font-semibold tracking-widest text-brass uppercase">{copy.kicker} · 90 min</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight font-semibold">
        {course.lectures[index].title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed">{copy.lead}</p>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">{copy.bridge}</p>

      <section className="mt-8 max-w-2xl rounded-2xl border border-line bg-surface p-5">
        <h2 className="font-display text-xl font-semibold">On the board</h2>
        <ul className="mt-3 space-y-2">
          {copy.board.map((topic) => (
            <li key={topic} className="border-l-2 border-maroon pl-3">
              {topic}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 max-w-2xl">
        <h2 className="font-display text-xl font-semibold">Retrieval check</h2>
        <p className="mt-2 leading-relaxed">{copy.checkQ}</p>
        <button
          type="button"
          onClick={() => setReveal((v) => !v)}
          className="mt-3 h-11 rounded-full border border-line bg-surface px-4 text-sm font-semibold"
        >
          {reveal ? "Hide a strong answer" : "Show a strong answer"}
        </button>
        {reveal && <p className="mt-3 leading-relaxed text-muted">{copy.checkA}</p>}
      </section>

      <section className="mt-6 max-w-2xl rounded-2xl border border-line bg-surface p-5">
        <h2 className="font-display text-xl font-semibold">Lab</h2>
        <p className="mt-2 leading-relaxed">{copy.lab}</p>
      </section>

      <section className="mt-6 max-w-2xl">
        <label htmlFor="note" className="font-display text-xl font-semibold">
          Your note
        </label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(`${code}-${index}`, e.target.value)}
          rows={5}
          placeholder="What you would still forget tomorrow."
          className="mt-3 w-full rounded-2xl border border-line bg-surface p-4 text-base leading-relaxed outline-none focus:border-maroon"
        />
      </section>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => toggleLecture(code, index)}
          className={`h-11 rounded-full px-5 text-sm font-semibold ${
            lectureOn ? "bg-maroon text-bg" : "border border-maroon text-maroon"
          }`}
        >
          {lectureOn ? "Session logged" : "Log this session"}
        </button>
        <button
          type="button"
          onClick={() => toggleLab(code, index)}
          className={`h-11 rounded-full px-5 text-sm font-semibold ${
            labOn ? "bg-brass text-bg" : "border border-line bg-surface"
          }`}
        >
          {labOn ? "Lab hours logged" : "Log the lab"}
        </button>
      </div>

      <div className="mt-8 flex justify-between gap-4 text-sm font-semibold">
        {prev ? (
          <Link
            to="/course/$code/lecture/$n"
            params={{ code, n: String(prev) }}
            className="text-maroon"
          >
            Previous
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to="/course/$code/lecture/$n" params={{ code, n: String(next) }} className="text-maroon">
            Next session
          </Link>
        ) : (
          <Link to="/course/$code/quiz" params={{ code }} className="text-maroon">
            Sit the check
          </Link>
        )}
      </div>
    </Shell>
  );
}
