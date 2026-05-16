export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          FDA Compliance Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Stop Failing FDA Calorie
          <span className="text-[#58a6ff]"> Labeling Audits</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your menu images or PDFs. Our AI scans every item, validates calorie counts against FDA requirements for chain restaurants, and delivers a compliance report in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Compliance Check — $14/mo
          </a>
          <a href="#faq" className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base">
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📋", title: "OCR Menu Scanning", desc: "Upload images or PDFs — we extract every menu item and calorie figure automatically." },
            { icon: "⚠️", title: "Violation Flagging", desc: "Instantly identifies missing, incorrect, or non-compliant calorie disclosures per FDA rules." },
            { icon: "✅", title: "Corrective Actions", desc: "Get specific, actionable recommendations to bring each flagged item into compliance." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$14</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited menu uploads",
              "AI-powered OCR extraction",
              "Full FDA compliance validation",
              "Violation reports & PDF export",
              "Corrective action recommendations",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which restaurants are required to display calorie counts?",
              a: "FDA rules require chain restaurants with 20 or more locations to display calorie information for standard menu items. MenuCalCheck validates your menus against these exact thresholds and formatting requirements."
            },
            {
              q: "What file formats can I upload?",
              a: "You can upload JPEG, PNG, and PDF files. Our OCR engine handles printed menus, digital menu boards, and scanned documents with high accuracy."
            },
            {
              q: "What happens if violations are found?",
              a: "Each flagged item includes a plain-language explanation of the violation and a specific corrective action — such as adding a calorie range, updating a value, or reformatting a disclosure — so your team knows exactly what to fix."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} MenuCalCheck. Built for food-service compliance.
      </footer>
    </main>
  );
}
