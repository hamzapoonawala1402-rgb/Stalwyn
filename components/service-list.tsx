import { services } from "@/lib/content";

export function ServiceList() {
  return (
    <section className="wrap sectors services" id="services" aria-labelledby="services-title">
      <h2 id="services-title">Staffing services</h2>
      <dl>
        {services.map((service) => (
          <div key={service.id}>
            <dt id={service.id}>{service.title}</dt>
            <dd>{service.summary}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
