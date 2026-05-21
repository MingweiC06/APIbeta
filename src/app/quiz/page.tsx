import { PageShell } from "../components/page-shell";
import { QuizForm } from "../components/quiz-form";
import { SectionHeader } from "../components/section-header";

export default function QuizPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Find My Stack"
            title="Find My AI Stack"
            description="Answer three quick questions and get a practical starter stack for your goal."
          />
          <QuizForm />
        </div>
      </section>
    </PageShell>
  );
}
