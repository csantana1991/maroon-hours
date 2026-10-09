import { COURSE_HOURS, courses, getCourse, type Course } from "@/data/courses";

export function has(list: number[] | undefined, n: number) {
  return !!list && list.includes(n);
}

export function courseHours(course: Course, lecturesDone: number, labsDone: number) {
  const n = Math.max(1, course.lectures.length);
  const study = ((COURSE_HOURS.lecture + COURSE_HOURS.reading) * lecturesDone) / n;
  const lab = (COURSE_HOURS.lab * labsDone) / n;
  return { study, lab, total: study + lab };
}

export function fmtHours(n: number) {
  if (n <= 0) return "0";
  if (n < 10) return n.toFixed(1);
  return Math.round(n).toString();
}

export function missingPrereqs(course: Course, plan: string[]) {
  const known = new Set(courses.map((c) => c.code));
  const mentioned = course.prereqs.match(/\d{3}/g) ?? [];
  return [...new Set(mentioned)].filter(
    (code) => code !== course.code && known.has(code) && !plan.includes(code),
  );
}

export type LessonCopy = {
  kicker: string;
  lead: string;
  bridge: string;
  board: string[];
  checkQ: string;
  checkA: string;
  lab: string;
};

export function lessonCopy(course: Course, index: number): LessonCopy {
  const lec = course.lectures[index];
  const prev = course.lectures[index - 1];
  const next = course.lectures[index + 1];
  const aim = course.description.split(". ")[0];
  return {
    kicker: `Session ${index + 1} of ${course.lectures.length}`,
    lead: `${lec.title} is part of CSCE ${course.code}, ${course.title}. ${aim}.`,
    bridge: prev
      ? `You arrive from “${prev.title}.”${next ? ` Leave ready for “${next.title}.”` : " This session closes the course."}`
      : `This session opens the course.${next ? ` Next is “${next.title}.”` : ""}`,
    board: lec.topics,
    checkQ: `Without notes, explain “${lec.topics[0]}” inside ${lec.title}. What fails if you ignore “${lec.topics[1] ?? lec.topics[0]}”?`,
    checkA: `A passing answer names ${lec.topics.join(", ")} and ties them to the course aim: ${aim}.`,
    lab:
      lec.lab ??
      `Build a small, measurable slice of “${lec.title}.” Submit code or a sketch plus a one-page memo: what you measured, and one failure case. It counts toward the 48 lab hours.`,
  };
}

export type QuizQuestion = {
  id: string;
  prompt: string;
  choices: string[];
  answer: number;
  why: string;
};

function mix(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function quizFor(course: Course): QuizQuestion[] {
  const lectures = course.lectures;
  const count = Math.min(5, lectures.length);
  const questions: QuizQuestion[] = [];
  for (let i = 0; i < count; i++) {
    const lec = lectures[(i * 2) % lectures.length];
    const correct = lec.topics[0];
    const distractors: string[] = [];
    let step = 1;
    while (distractors.length < 3 && step < 24) {
      const other = lectures[(i * 2 + step) % lectures.length];
      const topic = other.topics[step % other.topics.length];
      if (topic && topic !== correct && !distractors.includes(topic)) distractors.push(topic);
      step++;
    }
    while (distractors.length < 3) distractors.push(`Unrelated aside ${distractors.length + 1}`);
    const choices = [correct, ...distractors.slice(0, 3)];
    const rot = mix(`${course.code}:${lec.title}`) % choices.length;
    const rotated = choices.map((_, idx) => choices[(idx + rot) % choices.length]);
    questions.push({
      id: `${course.code}-${i}`,
      prompt: `Which idea is central to “${lec.title}”?`,
      choices: rotated,
      answer: rotated.indexOf(correct),
      why: `That session turns on ${lec.topics.join(", ")}.`,
    });
  }
  return questions;
}

export function resumeTarget(plan: string[], lectures: Record<string, number[]>) {
  const ordered = [
    ...plan,
    ...Object.keys(lectures),
    ...courses.map((c) => c.code),
  ];
  const seen = new Set<string>();
  for (const code of ordered) {
    if (seen.has(code)) continue;
    seen.add(code);
    const course = getCourse(code);
    if (!course) continue;
    const done = new Set(lectures[code] ?? []);
    if (done.size >= course.lectures.length && !plan.includes(code) && !lectures[code]) continue;
    const next = course.lectures.findIndex((_, i) => !done.has(i));
    if (next >= 0) return { course, index: next };
  }
  const first = courses[0];
  return { course: first, index: 0 };
}
