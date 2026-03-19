export default function MessageForm() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(14,10,24,0.98), rgba(20,12,36,0.98))",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{background:'linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(168,85,247,0.6), transparent)'}} />

          {/* Purple orb */}
          <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{background:'radial-gradient(circle, #7C3AED, transparent)'}} />

          <div className="relative z-10 flex flex-col lg:flex-row gap-0">
            {/* Left — CTA Text */}
            <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-violet-300 border border-violet-500/30 mb-6 w-fit"
                style={{background:'rgba(124,58,237,0.1)'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                Business Solutions
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Interested in our{" "}
                <span className="gradient-text">digital solutions</span>
                <br />for your company?
              </h2>

              <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
                Send us a message now and we&#39;ll get back to you ASAP. Our team is ready to help digitize your entire organization.
              </p>

              {/* Features */}
              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Custom branded NFC cards for your team",
                  "Centralized contact management dashboard",
                  "Dedicated account manager",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{background:'rgba(124,58,237,0.2)', border:'1px solid rgba(124,58,237,0.4)'}}>
                      <span className="text-violet-400 text-xs">✓</span>
                    </div>
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px self-stretch"
              style={{background:'linear-gradient(180deg, transparent, rgba(124,58,237,0.3), transparent)'}} />

            {/* Right — Form */}
            <div className="flex-1 p-8 sm:p-12 lg:p-16">
              <h3 className="text-white font-semibold text-lg mb-6">Send us a message</h3>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                    style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)'}}
                  />
                  <input
                    type="email"
                    placeholder="E-mail address"
                    className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                    style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)'}}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                  style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)'}}
                />
                <input
                  type="text"
                  placeholder="Number of Employees"
                  className="px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                  style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)'}}
                />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all resize-none"
                  style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)'}}
                />
                <button
                  type="submit"
                  className="self-start px-8 py-3.5 rounded-full font-semibold text-sm text-white btn-glow transition-all"
                  style={{background:'linear-gradient(135deg,#7C3AED,#A855F7)'}}
                >
                  Send Message ✦
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}