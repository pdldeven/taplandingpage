import ambuja from "../assets/ambuja.png";
import esewa from "../assets/esewa.png";
import Eyeplex from "../assets/Eyeplex.png";
import khalti from "../assets/khalti.png";
import oyo from "../assets/oyo.png";
import Yeti from "../assets/Yeti.png";
import fonpay from "../assets/fonpay.png";
import iphone from "../assets/iphone.png";
import Image from "next/image";

const logos = [ambuja, esewa, Eyeplex, khalti, oyo, Yeti, fonpay, ambuja, esewa, Eyeplex, khalti, oyo, Yeti, fonpay];

export const LogoTicker = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Trusted by label */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500 mb-8">
          Trusted by leading brands across the region
        </p>

        {/* Infinite Logo Ticker */}
        <div className="relative">
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{background:'linear-gradient(90deg, var(--bg-primary), transparent)'}} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{background:'linear-gradient(270deg, var(--bg-primary), transparent)'}} />

          <div className="flex overflow-hidden">
            <div className="flex gap-14 items-center animate-ticker whitespace-nowrap">
              {logos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 opacity-50 hover:opacity-90 transition-opacity duration-300">
                  <img
                    src={logo.src}
                    alt="Brand Logo"
                    className="h-10 w-auto object-contain brightness-0 invert"
                    style={{maxWidth:'120px'}}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* What is a digital business card */}
        <div className="relative rounded-3xl overflow-hidden"
          style={{background:'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.08) 50%, rgba(10,10,15,0.6) 100%)',
            border:'1px solid rgba(124,58,237,0.2)'}}>

          {/* Inner glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

          <div className="flex flex-col lg:flex-row items-center gap-0">
            {/* Text side */}
            <div className="flex-1 p-8 sm:p-12 lg:p-16">
              {/* Tag */}
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-violet-300 border border-violet-500/30 mb-6"
                style={{background:'rgba(124,58,237,0.1)'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                Digital Business Card
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                What is a <span className="gradient-text">digital business</span> card?
              </h2>

              <p className="text-gray-400 leading-relaxed text-base max-w-lg">
                In today&apos;s fast-paced business world, our Digital Business Card represents
                the cutting edge of networking. It&apos;s an eco-friendly, tech-savvy solution enabling
                you to share contact information instantly via{" "}
                <span className="text-violet-300 font-medium">NFC</span> and{" "}
                <span className="text-violet-300 font-medium">QR code</span> technology.
              </p>

              {/* Feature bullets */}
              <div className="mt-6 flex flex-col gap-3">
                {["No app needed for recipients", "Real-time profile updates", "Works with iPhone & Android"].map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-400 text-xs">✓</span>
                    </div>
                    {feat}
                  </div>
                ))}
              </div>

              <button className="mt-8 px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold text-sm btn-glow">
                Learn More →
              </button>
            </div>

            {/* Image side */}
            <div className="lg:w-80 xl:w-96 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative animate-float">
                <div className="absolute inset-0 rounded-3xl blur-2xl"
                  style={{background:'radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)'}} />
                <Image
                  src={iphone}
                  alt="Digital Business Card App"
                  className="relative z-10 w-full max-w-[220px] h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
