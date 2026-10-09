import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type QuizScore = { score: number; total: number };

type ProgressState = {
  hydrated: boolean;
  lectures: Record<string, number[]>;
  labs: Record<string, number[]>;
  notes: Record<string, string>;
  quizzes: Record<string, QuizScore>;
  plan: string[];
  weekly: number;
  toggleLecture: (code: string, n: number) => void;
  toggleLab: (code: string, n: number) => void;
  setNote: (key: string, text: string) => void;
  setQuiz: (code: string, score: number, total: number) => void;
  togglePlan: (code: string) => void;
  setWeekly: (n: number) => void;
};

function toggleNum(list: number[] | undefined, n: number): number[] {
  const next = list ? [...list] : [];
  const i = next.indexOf(n);
  if (i >= 0) next.splice(i, 1);
  else next.push(n);
  return next;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      hydrated: false,
      lectures: {},
      labs: {},
      notes: {},
      quizzes: {},
      plan: [],
      weekly: 12,
      toggleLecture: (code, n) =>
        set((s) => ({
          lectures: { ...s.lectures, [code]: toggleNum(s.lectures[code], n) },
        })),
      toggleLab: (code, n) =>
        set((s) => ({
          labs: { ...s.labs, [code]: toggleNum(s.labs[code], n) },
        })),
      setNote: (key, text) => set((s) => ({ notes: { ...s.notes, [key]: text } })),
      setQuiz: (code, score, total) =>
        set((s) => ({ quizzes: { ...s.quizzes, [code]: { score, total } } })),
      togglePlan: (code) =>
        set((s) => ({
          plan: s.plan.includes(code) ? s.plan.filter((c) => c !== code) : [...s.plan, code],
        })),
      setWeekly: (n) => set({ weekly: n }),
    }),
    {
      name: "maroon-hours-v1",
      skipHydration: true,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        lectures: s.lectures,
        labs: s.labs,
        notes: s.notes,
        quizzes: s.quizzes,
        plan: s.plan,
        weekly: s.weekly,
      }),
    },
  ),
);
