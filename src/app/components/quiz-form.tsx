"use client";

import { useMemo, useState } from "react";
import { filterCategories, quizStacks, type FilterCategory } from "./data";

const budgets = ["Free", "Low", "Medium", "High"] as const;
const experienceLevels = ["Beginner", "Intermediate", "Advanced"] as const;

export function QuizForm() {
  const [goal, setGoal] = useState<FilterCategory>("Study");
  const [budget, setBudget] = useState<(typeof budgets)[number]>("Free");
  const [experience, setExperience] = useState<(typeof experienceLevels)[number]>("Beginner");

  const recommendation = useMemo(() => {
    const stack = quizStacks[goal];
    const note =
      experience === "Beginner"
        ? "Start with the first tool, then add the rest when the workflow feels comfortable."
        : "Use the stack together: plan with the assistant, execute in the specialist tool, and organize the output.";

    return {
      title: `${goal} AI Stack`,
      stack,
      note,
      budget,
      experience,
    };
  }, [budget, experience, goal]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="glass-card rounded-lg p-6 sm:p-8">
        <QuestionGroup title="What are you trying to do?">
          {filterCategories.map((option) => (
            <ChoiceButton key={option} active={goal === option} onClick={() => setGoal(option)}>
              {option}
            </ChoiceButton>
          ))}
        </QuestionGroup>

        <QuestionGroup title="Budget">
          {budgets.map((option) => (
            <ChoiceButton key={option} active={budget === option} onClick={() => setBudget(option)}>
              {option}
            </ChoiceButton>
          ))}
        </QuestionGroup>

        <QuestionGroup title="Experience">
          {experienceLevels.map((option) => (
            <ChoiceButton key={option} active={experience === option} onClick={() => setExperience(option)}>
              {option}
            </ChoiceButton>
          ))}
        </QuestionGroup>
      </div>

      <section className="glass-card rounded-lg p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200/80">Recommended Stack</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">{recommendation.title}</h2>
        <div className="mt-8 grid gap-3">
          {recommendation.stack.map((tool, index) => (
            <div key={tool} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs text-white/38">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{tool}</h3>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-teal-200/20 bg-teal-200/[0.06] p-5">
          <p className="text-sm leading-6 text-white/68">{recommendation.note}</p>
          <p className="mt-4 text-sm text-white/44">
            Budget: {recommendation.budget} · Experience: {recommendation.experience}
          </p>
        </div>
      </section>
    </div>
  );
}

function QuestionGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="mb-8 last:mb-0">
      <legend className="mb-3 text-sm font-semibold text-white">{title}</legend>
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

function ChoiceButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-teal-200/50 bg-teal-200/12 text-white"
          : "border-white/10 bg-white/[0.04] text-white/58 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
