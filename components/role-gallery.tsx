import Image from "next/image";
import { roles } from "@/lib/content";

export function RoleGallery() {
  return (
    <section className="wrap role-gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title">Roles we can help fill</h2>
      <div className="gallery-grid">
        {roles.map((role) => (
          <figure key={role.src}>
            <Image
              src={role.src}
              alt={role.alt}
              width={role.width}
              height={role.height}
              sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 820px) 45vw, 280px"
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption>{role.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
