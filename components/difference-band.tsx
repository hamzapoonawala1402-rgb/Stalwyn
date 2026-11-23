import { difference } from "@/lib/content";

export function DifferenceBand() {
  return (
    <section className="difference" aria-labelledby="difference-title">
      <div className="wrap difference-inner">
        <h2 id="difference-title">{difference.title}</h2>
        <p>{difference.summary}</p>
      </div>
    </section>
  );
}
