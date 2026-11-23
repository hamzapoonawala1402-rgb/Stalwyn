export function SiteFooter() {
  return (
    <footer className="wrap foot">
      <a className="brand" href="#top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/mark.svg" alt="" width={32} height={32} />
        <span>
          Stalwyn
          <small>WORKFORCE</small>
        </span>
      </a>
      <span>Staffing and recruitment across the United Kingdom</span>
    </footer>
  );
}
