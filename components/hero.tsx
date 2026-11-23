import Image from "next/image";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero wrap">
      <div className="lead">
        <h1>{hero.title}</h1>
        <p>{hero.summary}</p>
        <a className="button" href={hero.primary.href}>
          {hero.primary.label}
        </a>
        <a className="plain" href={hero.secondary.href}>
          {hero.secondary.label}
        </a>
      </div>
      <Image
        className="heroPhoto"
        src={hero.image.src}
        alt={hero.image.alt}
        sizes={hero.image.sizes}
        width={hero.image.width}
        height={hero.image.height}
        style={{ width: "100%", height: "auto" }}
        priority
      />
    </section>
  );
}
