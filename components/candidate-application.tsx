import { DraftForm } from "@/components/draft-form";
import { candidateApplication } from "@/lib/content";

export function CandidateApplication() {
  return (
    <section className="wrap split jobs" id={candidateApplication.id}>
      <div>
        <h2>{candidateApplication.title}</h2>
        <p>{candidateApplication.intro}</p>
      </div>
      <DraftForm form={candidateApplication.form} />
    </section>
  );
}
