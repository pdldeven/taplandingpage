import Image from "next/image";
import contact from "../assets/contact.png";
import business from "../assets/business.png";
import profile from "../assets/profile.png";
import sharing from "../assets/sharing.png";
import product from "../assets/product.png";
import track from "../assets/track.png";

const features = [
  {
    title: "Contact Management",
    description: "Streamline and enhance your networking with intelligent contact organization.",
    image: contact,
    icon: "📋",
    color: "from-violet-600/20 to-purple-500/10",
    border: "border-violet-500/20",
    glow: "rgba(124,58,237,0.15)",
  },
  {
    title: "Scan Physical Cards",
    description: "Digitize traditional business cards instantly using your smartphone camera.",
    image: business,
    icon: "📷",
    color: "from-blue-600/20 to-cyan-500/10",
    border: "border-blue-500/20",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    title: "Personalized Profiles",
    description: "Create richly customizable digital profiles that go far beyond basic contact info.",
    image: profile,
    icon: "✨",
    color: "from-pink-600/20 to-rose-500/10",
    border: "border-pink-500/20",
    glow: "rgba(236,72,153,0.15)",
  },
  {
    title: "Customized Sharing",
    description: "Tailor exactly what information you share based on context or recipient.",
    image: sharing,
    icon: "🔗",
    color: "from-emerald-600/20 to-teal-500/10",
    border: "border-emerald-500/20",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    title: "Product Management",
    description: "Control your products and profile like never before — and more features to come.",
    image: product,
    icon: "📦",
    color: "from-orange-600/20 to-amber-500/10",
    border: "border-orange-500/20",
    glow: "rgba(249,115,22,0.15)",
  },
  {
    title: "Track Your Performance",
    description: "Stay ahead by monitoring your profile views, taps, and engagement metrics.",
    image: track,
    icon: "📈",
    color: "from-violet-600/20 to-indigo-500/10",
    border: "border-indigo-500/20",
    glow: "rgba(99,102,241,0.15)",
  },
];

export default function Features() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-violet-300 border border-violet-500/30 mb-6"
            style={{background:'rgba(124,58,237,0.1)'}}>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Everything You Need
          </span>

          {/* Big gradient watermark text */}
          <div className="relative mb-2">
            <h1 className="text-7xl sm:text-8xl md:text-[120px] lg:text-[160px] font-black text-transparent select-none leading-none"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.05)',
                color: 'transparent',
              }}>
              Features
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Get to know our{" "}
                <span className="gradient-text">powerful</span>{" "}
                solutions
              </h2>
            </div>
          </div>

          <p className="mt-16 text-gray-400 text-base max-w-lg leading-relaxed">
            Everything you need to build meaningful connections and manage your professional presence effortlessly.
          </p>

          <button className="mt-8 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold btn-glow text-sm">
            Download The App
          </button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl bg-gradient-to-br ${feature.color} border ${feature.border} overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer`}
              style={{
                background: `linear-gradient(135deg, rgba(16,16,24,0.9), rgba(16,16,24,0.95))`,
                border: `1px solid rgba(255,255,255,0.07)`,
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{boxShadow:`inset 0 0 60px ${feature.glow}`}} />

              {/* Top border accent */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.color.replace('/20', '').replace('/10', '')} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className="p-6 flex flex-col items-start">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} border ${feature.border} flex items-center justify-center text-lg mb-4`}>
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature image */}
                <div className="mt-6 w-full rounded-xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
