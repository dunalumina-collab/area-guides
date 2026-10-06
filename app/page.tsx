// Homepage hub. Driven entirely by the central registry (lib/registry.ts) —
// every guide added there (scripts/add-guide.ts) appears here automatically;
// never hand-list guides here.
import Link from "next/link";
import { registry } from "@/lib/registry";

export default function Home() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <img className="logo" src="/duna-logo.png" alt="Duna Group logo" />
        </div>
      </div>

      <div className="wrap">
        <section className="hub-hero">
          <h1>Duna Area &amp; Project Guides</h1>
          <p>
            In-depth investment guides to Dubai&rsquo;s areas and projects &mdash; pricing,
            rental yield, sales comparables and market positioning, kept current by Duna
            Lumina Real Estate.
          </p>
        </section>

        <section className="guide-grid">
          {registry.map((g) => {
            const isLive = g.status === "published";
            const card = (
              <>
                <span className={`status-pill ${isLive ? "live" : "progress"}`}>
                  {isLive ? "Live" : "In progress"}
                </span>
                <h3>{g.name}</h3>
                <span className="area">{g.areaLabel}</span>
              </>
            );
            return isLive ? (
              <Link key={g.slug} className="guide-card" href={`/${g.slug}`}>
                {card}
              </Link>
            ) : (
              <div key={g.slug} className="guide-card" aria-disabled="true">
                {card}
              </div>
            );
          })}
        </section>
      </div>

      <footer>Duna Lumina Real Estate &mdash; Dubai Area &amp; Project Guides</footer>
    </>
  );
}
