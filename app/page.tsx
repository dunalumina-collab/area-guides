// Homepage hub.
//
// Oct 2026 redesign (team-page redesign): the former top-of-page area/
// project directory (hero banner + "Guides" grid pulling every published
// registry entry) is replaced with an About Duna Group section and a
// "Meet the Team" section, per Vesna's explicit instruction — guide
// discovery now happens through each specialist's own profile page
// (app/team/[slug]/page.tsx, lib/team.ts), not a homepage grid. Every
// section from WhyDuna onward (Why Work With Us, Listing Packages, the
// cost-comparison section, Duna Intelligence) is untouched, verbatim.
//
// Presentation still sits on the same premium system as the guide pages
// (sticky g-header, alternating forest/ivory/white g-section rhythm,
// sec-intro headings, card-row/card-plain styling, premium g-footer) —
// see components/guide/GuideHeader.tsx and components/HomeFooter.tsx.
import Link from "next/link";
import Image from "next/image";
import { getTeamMembers } from "@/lib/team";
import type { TeamMemberProfile } from "@/lib/types";
import GuideHeader from "@/components/guide/GuideHeader";
import HomeFooter from "@/components/HomeFooter";
import WhyDuna from "@/components/guide/WhyDuna";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "team", label: "Meet the Team" },
  { id: "why-duna", label: "Why Work With Us" },
];

function TeamCard({ member }: { member: TeamMemberProfile }) {
  return (
    <Link className="card-plain team-card" href={`/team/${member.slug}`}>
      <div className="team-photo">
        <Image src={member.photoSrc} alt={member.name} width={104} height={104} style={{ objectFit: "cover" }} />
      </div>
      <div className="team-name">{member.name}</div>
      <span className="team-title">{member.title}</span>
      <span className="team-spec">{member.specialisation}</span>
      <span className="cta-btn">View Profile &rarr;</span>
    </Link>
  );
}

export default function Home() {
  const team = getTeamMembers();

  return (
    <div className="guide-page" id="top">
      <GuideHeader
        sections={SECTIONS}
        whatsappHref="https://wa.me/971585151070"
        extraLink={{ label: "dunagroup.ae", href: "https://dunagroup.ae/" }}
      />

      {/* ABOUT — same premium dark band as the guide pages' hero */}
      <section className="g-section tone-forest home-hero" id="about">
        <div className="wrap">
          <span className="eyebrow">About Duna Group</span>
          <h1>Dubai real estate, backed by the numbers behind it.</h1>
          <p className="home-hero-lead">
            Duna Group is a Dubai-based real estate advisory team working with owners, buyers, tenants and
            investors across the city&rsquo;s residential market. Every recommendation is backed by registered DLD
            transactions, rental comparables and real yield data &mdash; not developer brochure copy &mdash; and
            every area or project we cover is handled by a dedicated specialist who knows the building, the
            numbers, and the client.
          </p>
          <div className="about-note home-hero-note">
            <p>
              <b>One team, every specialism covered.</b> Meet the specialist for your building or area below, or
              message us on WhatsApp and we&rsquo;ll connect you with the right person.
            </p>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="g-section tone-ivory" id="team">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">Duna Group Team</span>
            <h2>Meet the Team</h2>
            <p>Five dedicated specialists, each with their own area or project guide &mdash; backed by the same registered transaction data.</p>
          </div>
          <div className="card-row cols-3">
            {team.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      <WhyDuna />

      <section className="g-section tone-white" id="listing-packages">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">For Owners</span>
            <h2>Listing Packages</h2>
            <p>
              Every listing is priced against real DLD transactions and live comparables, then marketed at one of
              three levels depending on how far you want your reach to go.
            </p>
          </div>
          <div className="leader-table">
            <table>
              <thead>
                <tr>
                  <th>What&rsquo;s included</th>
                  <th className="mid">Open Listing</th>
                  <th className="mid">Exclusive</th>
                  <th className="mid">Exclusive + Commission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Portal advertising</td>
                  <td className="mid">Yes</td>
                  <td className="mid">Yes</td>
                  <td className="mid">Yes</td>
                </tr>
                <tr>
                  <td>Featured / premium listing</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">Featured, 1 wk</td>
                  <td className="mid">Featured + premium, 1&ndash;2 wk</td>
                </tr>
                <tr>
                  <td>Photos, video &amp; 3D tour</td>
                  <td className="mid">Photo / AI video</td>
                  <td className="mid">+ Pro video</td>
                  <td className="mid">+ 3D tour (off-plan)</td>
                </tr>
                <tr>
                  <td>Paid online marketing campaign</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">Yes</td>
                </tr>
                <tr>
                  <td>Area tenant database (2,000+)</td>
                  <td className="mid">Yes</td>
                  <td className="mid">Yes</td>
                  <td className="mid">Yes, priority</td>
                </tr>
                <tr>
                  <td>Area specialists &amp; 2,000+ brokerages</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">Yes</td>
                </tr>
                <tr>
                  <td>Duna investor database</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">Email only</td>
                  <td className="mid">Email, call, WhatsApp, SMS</td>
                </tr>
                <tr>
                  <td>Commission</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">2% sale &middot; 5% lease</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leader-note">
            Exact deliverables vary slightly by property type (off-plan, ready resale, ready leasing). Full
            package terms available from your area specialist.
          </p>
        </div>
      </section>

      <section className="g-section tone-ivory" id="cost-comparison">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">For Buyers &amp; Investors</span>
            <h2>Owning Abroad &mdash; Cost Comparison</h2>
            <p>
              What the same capital costs to hold in Dubai versus other markets &mdash; tax structure, not just
              headline yield.
            </p>
          </div>
          <div className="leader-table">
            <table>
              <thead>
                <tr>
                  <th>Cost on an owned property</th>
                  <th className="mid">Dubai, UAE</th>
                  <th className="mid">United Kingdom</th>
                  <th className="mid">United States</th>
                  <th className="mid">Western Europe (typical)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual property tax</td>
                  <td className="mid">None</td>
                  <td className="mid">Council tax (banded)</td>
                  <td className="mid">~0.5&ndash;2.5% of value</td>
                  <td className="mid">Land/property tax applies</td>
                </tr>
                <tr>
                  <td>Income tax on rent</td>
                  <td className="mid">None</td>
                  <td className="mid">Up to 45%</td>
                  <td className="mid">Federal + state rates</td>
                  <td className="mid">Taxed as income</td>
                </tr>
                <tr>
                  <td>Capital gains tax on resale</td>
                  <td className="mid">None</td>
                  <td className="mid">18&ndash;24%</td>
                  <td className="mid">Federal + state rates</td>
                  <td className="mid">Typically applies</td>
                </tr>
                <tr>
                  <td>One-time purchase cost</td>
                  <td className="mid">4% DLD transfer fee</td>
                  <td className="mid">Stamp duty, higher for overseas buyers</td>
                  <td className="mid">Closing costs vary by state</td>
                  <td className="mid">Transfer tax / notary fees</td>
                </tr>
                <tr>
                  <td>Inheritance / wealth exposure</td>
                  <td className="mid">None</td>
                  <td className="mid">Inheritance tax applies</td>
                  <td className="mid">Estate tax above threshold</td>
                  <td className="mid">Wealth/inheritance tax common</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leader-note">
            Illustrative structural comparison, not tax advice. Exact rates depend on residency, nationality,
            property type, country and year &mdash; confirm current figures with a licensed tax advisor. For
            city-by-city numbers, open the Global Market Comparator below.
          </p>
        </div>
      </section>

      <section className="g-section tone-white" id="platform">
        <div className="wrap">
          <div className="mp-block">
            <div>
              <span className="eyebrow">Beyond Any Single Building</span>
              <h2>Duna Intelligence Platform &mdash; Dubai Market Data &amp; Global Market Comparator</h2>
              <p>
                Every guide on this page is one building inside a much larger picture. Duna&rsquo;s own data
                platform tracks registered sale and rental activity across every Dubai community in real time,
                and benchmarks Dubai itself against other global investment cities &mdash; so any decision to
                sell, buy, rent or hold can be weighed against the wider Dubai market, and against where else in
                the world the same capital could go. This is extra value we provide every client, at no charge.
              </p>
              <a className="mp-cta" href="https://market.dunagroup.ae/" target="_blank" rel="noopener noreferrer">
                Open Duna Intelligence &rarr;
              </a>
            </div>
            <div className="mp-features">
              <div className="mp-feature">
                <b>Dubai Market Data</b>
                <span>
                  Live pricing, yields and transaction volume for every area and project we track, updated as
                  deals register.
                </span>
              </div>
              <div className="mp-feature">
                <b>Global Market Comparator</b>
                <span>
                  Side-by-side yield, price growth and entry cost against other international cities, for owners
                  and investors weighing Dubai against alternatives.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}
