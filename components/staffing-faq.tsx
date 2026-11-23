import { faqs, type RichPart } from "@/lib/content";

function RichText({ parts }: { parts: RichPart[] }) {
  return parts.map((part, index) =>
    typeof part === "string" ? (
      <span key={index}>{part}</span>
    ) : (
      <a key={index} href={part.href}>
        {part.label}
      </a>
    ),
  );
}

export function StaffingFaq() {
  return (
    <section className="wrap staffing-faq" aria-labelledby="faq-title">
      <h2 id="faq-title">Staffing enquiries</h2>
      <dl>
        {faqs.map((item) => (
          <div key={item.question}>
            <dt>{item.question}</dt>
            <dd>
              <RichText parts={item.answer} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
