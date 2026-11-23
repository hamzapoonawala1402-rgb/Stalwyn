import { DraftForm } from "@/components/draft-form";
import { employerEnquiry } from "@/lib/content";

export function EmployerEnquiry() {
  return (
    <section className="employ">
      <div className="wrap split" id={employerEnquiry.id}>
        <div>
          <h2>{employerEnquiry.title}</h2>
          <p>{employerEnquiry.intro}</p>
        </div>
        <DraftForm form={employerEnquiry.form} />
      </div>
    </section>
  );
}
