export default function ContactPage() {
  return (
    <main className="pt-24">

      {/* --- Hero Section --- */}
      <section className="relative h-64 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/contact-hero.jpg')", // put image in /public/images/
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact
          </h1>
        </div>
      </section>

      {/* --- Contact Details --- */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">

          <p className="mb-12 text-gray-600 max-w-3xl">
            For all communications regarding the International Research Conference
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Conference Office */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                Conference Office
              </h3>

              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-3">
                   +94-55-3053766
                </p>
                <p className="flex items-center gap-3">
                   +94-55-2226633
                </p>
                <p className="flex items-center gap-3">
            
                  <a
                    href="mailto:conference@uwu.ac.lk"
                    className="text-blue-600 hover:underline"
                  >
                    conference@uwu.ac.lk
                  </a>
                </p>
              </div>
            </div>

            {/* Conference Coordinator */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Conference Coordinator
              </h3>
              <p className="font-medium">Dr. N. M. Chamil Nayanakantha</p>
              <p>Uva Wellassa University</p>
              <p>Badulla 90 000</p>
              <p>Sri Lanka</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:chamil@uwu.ac.lk"
                  className="text-blue-600 hover:underline"
                >
                  chamil@uwu.ac.lk
                </a>
              </p>
            </div>

            {/* Conference Secretary */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Conference Secretary
              </h3>
              <p className="font-medium">Dr. N. P. Samarasinghe</p>
              <p>Uva Wellassa University</p>
              <p>Badulla 90 000</p>
              <p>Sri Lanka</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:nayanathara@uwu.ac.lk"
                  className="text-blue-600 hover:underline"
                >
                  nayanathara@uwu.ac.lk
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- Map Section --- */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-hidden rounded-2xl shadow-lg border">
            <iframe
              src="https://www.google.com/maps?q=Uva%20Wellassa%20University%20of%20Sri%20Lanka&output=embed"
              className="w-full h-[450px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
