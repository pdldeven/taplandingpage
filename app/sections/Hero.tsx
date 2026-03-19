import Image from "next/image";
import image from "../assets/image.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-8 pb-0">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] top-[-200px] left-[-200px] bg-violet-700/25" />
      <div className="orb w-[400px] h-[400px] top-[10%] right-[-100px] bg-purple-500/15" />
      <div className="orb w-[300px] h-[300px] bottom-[20%] left-[10%] bg-pink-500/10" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="animate-fadeInUp mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/30 text-violet-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            ✦ Next-Gen NFC Networking Technology
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fadeInUp delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-white max-w-4xl">
          Tap Into{" "}
          <span className="gradient-text-shine">Advanced</span>
          <br />
          Networking —
          <br />
          <span className="text-gray-200">The Future of</span>{" "}
          <span className="gradient-text">Digital Cards</span>
        </h1>

        {/* Subtext */}
        <p className="animate-fadeInUp delay-200 mt-6 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
          Share your identity, socials & contact info in one tap. Powered by NFC &amp; QR technology — no app required for recipients.
        </p>

        {/* CTAs */}
        <div className="animate-fadeInUp delay-300 flex flex-col sm:flex-row items-center gap-3 mt-8">
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold text-base btn-glow tracking-wide"
          >
            Start For Free ✦
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/15 text-white font-medium text-base hover:bg-white/8 transition-all duration-300 tracking-wide"
          >
            For Teams →
          </a>
        </div>

        {/* Trust badges */}
        <div className="animate-fadeInUp delay-400 flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-gray-500">
          <span className="flex items-center gap-1.5"><span className="text-violet-400">✓</span> 1M+ Interactions</span>
          <span className="w-px h-4 bg-white/10 hidden sm:block" />
          <span className="flex items-center gap-1.5"><span className="text-violet-400">✓</span> 1000+ Organizations</span>
          <span className="w-px h-4 bg-white/10 hidden sm:block" />
          <span className="flex items-center gap-1.5"><span className="text-violet-400">✓</span> 65+ Countries</span>
        </div>

        {/* Hero Image with glow ring */}
        <div className="animate-fadeInUp delay-500 w-full mt-12 relative">
          {/* Glow under image */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-violet-900/30 to-transparent rounded-3xl z-10 pointer-events-none" />
          <div
            className="relative mx-auto rounded-2xl overflow-hidden animate-float"
            style={{ maxWidth: "90%", boxShadow: "0 0 80px rgba(124,58,237,0.25), 0 40px 100px rgba(0,0,0,0.6)" }}
          >
            {/* Top notch bar like app window */}
            <div className="absolute top-0 left-0 right-0 h-8 z-10 flex items-center px-4 gap-1.5" style={{background:'rgba(0,0,0,0.5)'}}>
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <Image src={image} alt="TAP Dashboard" className="w-full h-auto" priority />
          </div>
        </div>
      </div>
    </section>
  );
};
