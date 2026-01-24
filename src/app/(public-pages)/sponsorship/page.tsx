export default function SponsorshipPage() {
  return (
    <main className="pt-24 bg-slate-50">
      {/* --- Hero Section --- */}
      <section className="bg-blue-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Become a Valued Sponsor of IRCUWU 2025
        </h1>
      </section>

      {/* --- Hero Card --- */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 px-8 py-20 text-center text-white shadow-xl">
            {/* Decorative circles */}
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10"></div>
            <span className="inline-block mt-6 rounded-full bg-white/20 px-20 py-5 text-xl font-semibold text-white">
              December 10 – 11, 2025
            </span>

            <p className="mt-6 text-lg md:text-base text-white/90 max-w-3xl mx-auto">
              International Research Conference of Uva Wellassa University
              (IRCUWU2025)
              <br />
              10th and 11th December, 2025
              <br />
              Outline of the Benefits for Sponsors and Partners of the
              IRCUWU2025
            </p>
          </div>
        </div>
      </section>

      {/* --- Sponsorship Intro --- */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl bg-white p-10 shadow-sm border text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Sponsorship Packages
            </h2>
            <p className="mt-3 font-medium text-gray-700">
              Choose the option that suits your goals best
            </p>
            <p className="mt-4 text-gray-600 text-sm">
              Partner with us to showcase your brand and connect with a wide
              audience through our exclusive sponsorship opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* --- Sponsorship Cards --- */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Platinum */}
          <SponsorshipCard
            title="Platinum Sponsorship"
            price="Rs. 1,000,000"
            color="border-blue-600"
            items={[
              "Website acknowledgement",
              "Organization logo on conference banner, displays, and cutouts",
              "Back-cover advertisement in the programme booklet",
              "Distribution of brochures to participants",
              "Other demands are negotiable",
            ]}
          />

          {/* Track */}
          <SponsorshipCard
            title="Track Sponsorship"
            price="Rs. 500,000"
            color="border-green-600"
            items={[
              "Sponsor a conference track",
              "Website acknowledgement",
              "Organization logo on conference banner, conference displays, and cutouts",
              "Visual branding to the track",
              "Banners",
              "Full-page advertisement in the programme booklet",
              "Other demands are negotiable",
            ]}
          />

          {/* Gold */}
          <SponsorshipCard
            title="Gold Sponsorship"
            price="Rs. 300,000"
            color="border-yellow-500"
            items={[
              "Website acknowledgement",
              "Organization logo on conference banner, displays, and cutouts",
              "5 banners",
              "Advertisement on the front inner cover page of the programme booklet",
              "Distribution of brochures to participants",
              "Other demands are negotiable",
            ]}
          />

          {/* Silver */}
          <SponsorshipCard
            title="Silver Sponsorship"
            price="Rs. 200,000"
            color="border-gray-500"
            items={[
              "Website acknowledgement",
              "Organization logo on conference banner, displays, and cutouts",
              "Half-page advertisement in the programme booklet",
              "Distribution of brochures to participants",
              "Other demands are negotiable",
            ]}
          />

          {/* Rs. 100,000 */}
          <SponsorshipCard
            title="Rs. 100,000 Sponsorship"
            price="Rs. 100,000"
            color="border-indigo-600"
            items={[
              "Website acknowledgement",
              "Organization logo on conference banner, displays, and cutouts",
              "Half-page advertisement in the programme booklet",
              "Distribution of brochures to participants",
              "Other demands are negotiable",
            ]}
          />

          {/* Rs. 50,000 */}
          <SponsorshipCard
            title="Rs. 50,000 Sponsorship"
            price="Rs. 50,000"
            color="border-teal-600"
            items={[
              "Website acknowledgement",
              "Organization logo on conference banner and displays",
              "Quarter-page advertisement in the programme booklet",
              "Distribution of brochures to participants",
              "Other demands are negotiable",
            ]}
          />
        </div>
      </section>

      {/* --- Contact CTA --- */}
      <section className="pb-28">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl bg-white border shadow-sm p-10 text-center">
            <h3 className="text-xl font-bold text-gray-900">
              We look forward to hearing from you
            </h3>
            <p className="mt-4 text-gray-700 text-sm">
              If you need further details regarding the conference, please
              contact:
            </p>
            <p className="mt-3 font-medium">
              Dr. N. M. Chamil Nayanakantha –{" "}
              <a
                href="mailto:chamil@uwu.ac.lk"
                className="text-blue-600 hover:underline"
              >
                chamil@uwu.ac.lk
              </a>{" "}
              | Mobile: <strong>0773094448</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- Reusable Card Component --- */
function SponsorshipCard({
  title,
  price,
  items,
  color,
}: {
  title: string;
  price: string;
  items: string[];
  color: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-8 shadow-sm border-t-4 ${color} transition hover:shadow-lg`}
    >
      <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      <p className="mt-2 font-semibold text-blue-600">{price}</p>

      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-green-600">✔</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
