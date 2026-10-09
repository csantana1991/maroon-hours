import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { getCourse } from "@/data/courses";
import { Shell } from "@/components/shell";
import { useProgress } from "@/lib/progress";
import { quizFor } from "@/lib/study";

export const Route = createFileRoute("/course/$code/quiz")({
  component: QuizPage,
});

function QuizPage() {
  const { code } = Route.useParams();
  const course = getCourse(code);
  const setQuiz = useProgress((s) => s.setQuiz);
  const saved = useProgress((s) => s.quizzes[code]);
  const questions = useMemo(() => (course ? quizFor(course) : []), [course]);
  const [picks, setPicks] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!course) {
    return (
      <Shell>
        <h1 className="font-display text-3xl">No course {code}</h1>
      </Shell>
    );
  }

  const score = questions.filter((q) => picks[q.id] === q.answer).length;

  function submit() {
    setSubmitted(true);
    setQuiz(course!.code, questions.filter((q) => picks[q.id] === q.answer).length, questions.length);
  }

  return (
    <Shell>
      <Link to="/course/$code" params={{ code: course.code }} className="text-sm font-semibold text-maroon">
        CSCE {course.code} · {course.title}
      </Link>
      <h1 className="mt-2 font-display text-4xl font-semibold">Five-question check</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Retrieval, not a grade. Pick the idea that actually belongs to the session.
        {saved ? ` Last sitting: ${saved.score} of ${saved.total}.` : ""}
      </p>

      <ol className="mt-8 max-w-2xl space-y-8">
        {questions.map((q, i) => (
          <li key={q.id}>
            <p className="font-semibold">
              {i + 1}. {q.prompt}
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {q.choices.map((choice, idx) => {
                const picked = picks[q.id] === idx;
                const correct = submitted && idx === q.answer;
                const wrong = submitted && picked && idx !== q.answer;
                return (
                  <button
                    key={`${q.id}-${idx}`}
                    type="button"
                    disabled={submitted}
                    onClick={() => setPicks((s) => ({ ...s, [q.id]: idx }))}
                    className={`min-h-11 rounded-2xl border px-4 py-3 text-left text-sm ${
                      correct
                        ? "border-maroon bg-maroon text-bg"
                        : wrong
                          ? "border-brass bg-surface text-ink"
                          : picked
                            ? "border-maroon bg-surface"
                            : "border-line bg-surface"
                    }`}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
            {submitted && <p className="mt-2 text-sm text-muted">{q.why}</p>}
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {!submitted ? (
          <button
            type="button"
            onClick={submit}
            disabled={Object.keys(picks).length < questions.length}
            className="h-11 rounded-full bg-maroon px-5 text-sm font-semibold text-bg disabled:opacity-40"
          >
            Score this sitting
          </button>
        ) : (
          <>
            <p className="font-display text-2xl text-maroon">
              {score} / {questions.length}
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setPicks({});
              }}
              className="h-11 rounded-full border border-line bg-surface px-5 text-sm font-semibold"
            >
              Sit it again
            </button>
          </>
        )}
      </div>
    </Shell>
  );
}
