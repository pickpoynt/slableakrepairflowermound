import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Clock, Search, Locate, Phone } from "lucide-react";
import { ReactNode } from "react";

interface HeroProps {
  title?: ReactNode;
  subtitle?: string;
  image?: string;
  overlayImage?: string;
  phone?: string;
  badge?: string;
  features?: { icon: any; text: string }[];
}

const Hero = ({
  title = (
    <>
      Brown Recluse Spider Specialist <br />
      <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Broomfield CO</span>
    </>
  ),
  subtitle = "Broomfield CO's specialized brown recluse abatement experts. We deploy targeted micro-encapsulated residuals, precision void injections, and exhaustive structural exclusion to eliminate the Front Range's most elusive threat — 24/7.",
  image = "/4.jpeg",
  overlayImage = "/1.jpeg",
  phone = "3238801224",
  badge = "BROOMFIELD CO BROWN RECLUSE EXPERTS",
  features = [
    { icon: Search, text: "Precision Void Mapping" },
    { icon: ShieldCheck, text: "Enclosure Sealing" },
    { icon: Locate, text: "Broomfield Native" }
  ]
}: HeroProps) => {
  const formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Hero background with Image 4 */}
      <div className="absolute inset-0">
        <img src={image} alt="Broomfield Brown Recluse Treatment Background" className="w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-left">
        <div className="max-w-4xl flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-8 font-bold uppercase tracking-[0.2em] text-xs animate-fade-in shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <Zap className="w-4 h-4 fill-amber-500" />
            {badge}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tighter animate-title-slide">
             Brown Recluse Spider Specialist <br />
            <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Broomfield CO</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-200 mb-12 leading-relaxed max-w-3xl font-medium italic animate-fade-in-up drop-shadow-md">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-start gap-6 mb-16 animate-fade-in-up [animation-delay:200ms]">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white h-20 px-12 rounded-2xl text-2xl font-bold shadow-2xl shadow-amber-900/40 border border-amber-500/20 transition-all hover:scale-105" asChild>
              <a href={`tel:${phone}`}>
                <Phone className="w-8 h-8 mr-4 fill-white" />
                {formattedPhone}
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fade-in-up [animation-delay:400ms]">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-start gap-4 bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-amber-600/20 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-amber-400 group-hover:text-white" />
                </div>
                <span className="text-white font-bold uppercase tracking-[3px] text-xs">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
