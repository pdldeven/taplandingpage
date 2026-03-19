import Image from "next/image";
import dark from "../assets/dark.png";
import management from "../assets/management.png";
import tap from "../assets/tap.png";
import store from "../assets/store.png";
import ring from "../assets/ring.png";
import tapicon from "../assets/tapicon.png";

const stats = [
  {
    value: "1,000+",
    label: "Organizations",
    desc: "Leading companies trust our NFC technology for their digital business cards.",
  },
  {
    value: "1M+",
    label: "Interactions Made",
    desc: "Connections happening every day on our platform.",
  },
  {
    value: "65+",
    label: "Countries",
    desc: "People around the world rely on TAP for seamless networking.",
  },
];

const steps = [
  {
    image: ring,
    step: "01",
    title: "Get a TAP Product",
    desc: "Select from a variety of cards, keychains, stickers & more.",
    link: "View Collections",
  },
  {
    image: store,
    step: "02",
    title: "Create Your Profile",
    desc: "Download our free app and add your info, socials & more.",
    link: "Download App",
  },
  {
    image: tap,
    step: "03",
    title: "Activate Your Product",
    desc: "Receive your product and activate it instantly from the app.",
    link: null,
  },
  {
    image: tapicon,
    step: "04",
    title: "Start Networking",
    desc: "Share your info with anyone, anywhere — with just one tap!",
    link: null,
  },
];

export default function Middle() {
  return (
    <section className="py-16">
      {/* Stats Banner */}
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-white"
          style={{
            background: "linear-gradient(135deg, #4C1D95 0%, #7C3AED 40%, #A855F7 70%, #6D28D9 100%)",
            boxShadow: "0 20px 80px rgba(124,58,237,0.4)",
          }}
        >
          {/* Inner pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{background:'white', transform:'translate(30%, -30%)'}} />

          <div className="relative z-10 text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/25 mb-4">
              🌍 Our Global Reach
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Be a part of the largest<br className="hidden sm:block" />
              community in the MENA region.
            </h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-block px-6 py-1 rounded-full bg-white/15 border border-white/20 mb-3">
                  <span className="text-3xl sm:text-4xl font-black">{stat.value}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{stat.label}</h3>
                <p className="text-purple-100 text-sm leading-relaxed max-w-[200px] mx-auto">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-bleed dark image */}
      <div className="mt-16 relative">
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{background:'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 8%, transparent 92%, var(--bg-primary) 100%)'}} />
        <Image src={dark} alt="TAP App Dark" className="w-full h-auto" />
      </div>

      {/* Management section */}
      <div className="relative mt-0">
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{background:'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 8%, transparent 92%, var(--bg-primary) 100%)'}} />
        <div className="bg-black flex justify-center">
          <Image src={management} alt="Management" className="w-full h-auto" />
        </div>
      </div>

      {/* How it Works */}
      <div className="container mx-auto px-4 sm:px-6 mt-16">
        <div
          className="rounded-3xl overflow-hidden p-8 sm:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(16,16,24,0.95), rgba(20,10,35,0.98))",
            border: "1px solid rgba(124,58,237,0.15)",
            boxShadow: "0 0 60px rgba(124,58,237,0.08)",
          }}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-violet-300 border border-violet-500/30 mb-4"
              style={{background:'rgba(124,58,237,0.1)'}}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="absolute hidden lg:block top-12 left-[60%] right-0 h-px z-10"
                    style={{background:'linear-gradient(90deg, rgba(124,58,237,0.5), transparent)'}} />
                )}

                <div className="relative rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}>
                  {/* Step badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white"
                      style={{background:'linear-gradient(135deg, #7C3AED, #A855F7)'}}>
                      {step.step}
                    </span>
                  </div>

                  {/* Product image */}
                  <div className="mt-4 relative flex justify-center">
                    <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity"
                      style={{background:'radial-gradient(circle, rgba(124,58,237,0.5), transparent 70%)'}} />
                    <Image src={step.image} alt={step.title} width={100} height={100}
                      className="w-24 h-auto relative z-10 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <h3 className="mt-5 text-white font-bold text-base">{step.title}</h3>
                  <p className="mt-2 text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                  {step.link && (
                    <a href="#" className="mt-3 inline-block text-violet-400 text-xs hover:text-violet-300 transition-colors font-medium underline underline-offset-2">
                      {step.link} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
