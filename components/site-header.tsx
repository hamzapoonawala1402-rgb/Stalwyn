import { nav } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="wrap top">
      <a className="brand" href="#top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/mark.svg" alt="" width={38} height={38} />
        <span>
          Stalwyn
          <small>WORKFORCE</small>
        </span>
      </a>
      <nav aria-label="Main">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
