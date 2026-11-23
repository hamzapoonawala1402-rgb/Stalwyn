import { industries } from "@/lib/content";

export function IndustryList() {
  return (
    <section className="wrap sectors industries" id="industries" aria-labelledby="industries-title">
      <h2 id="industries-title">Industries we serve</h2>
      <dl>
        {industries.map((industry) => (
          <div key={industry.title}>
            <dt>{industry.title}</dt>
            <dd>{industry.summary}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
