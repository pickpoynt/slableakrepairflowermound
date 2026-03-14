import { ShieldCheck, Target, Search, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-900 mb-8 font-bold uppercase tracking-widest text-xs border border-amber-200">
              <ShieldCheck className="w-4 h-4" />
              Clarksdale MS's Roach Elimination Team
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tighter leading-none">
              Why Our <span className="text-amber-600">Roach System</span> Works
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium italic">
              Cockroaches in Mississippi are not a simple problem. Clarksdale's warm, humid climate is ideal for German roaches, American roaches, and Oriental cockroaches to thrive year-round. Our specialists deploy multi-phase elimination protocols — gel baits, crack-and-crevice residuals, and insect growth regulators — targeting every life stage simultaneously to prevent resistance and ensure total eradication.
            </p>
            <div className="grid gap-6">
              {[
                { title: "Licensed MS Technicians", desc: "State-licensed pest professionals trained in Mississippi cockroach species and behavior.", icon: ShieldCheck },
                { title: "Multi-Phase Protocol", desc: "Baits + residuals + IGRs deployed together to prevent resistance and ensure total kill.", icon: Target },
                { title: "Same-Day Response", desc: "Rapid dispatch across Clarksdale, Coahoma County, and surrounding areas.", icon: Clock },
                { title: "Source Identification", desc: "We locate every nest and entry point to stop the infestation at its origin.", icon: Search },
                { title: "Follow-Up Warranty", desc: "Satisfied customers backed by our post-treatment monitoring and warranty visits.", icon: Award }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    <item.icon className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-slate-700 font-bold uppercase tracking-wider text-sm block">{item.title}</span>
                    <span className="text-slate-500 text-xs">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-amber-500/20 shadow-2xl relative group">
              <img src="/1.jpeg" alt="Cockroach Exterminator Clarksdale MS" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-amber-500/20 shadow-2xl relative group mt-8 md:mt-16">
              <img src="/3.jpeg" alt="Professional Roach Treatment Clarksdale MS" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <p className="text-amber-400 font-bold uppercase tracking-widest text-[10px] mb-2">Roach Problem?</p>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Call Clarksdale's Specialists</h4>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white font-bold h-10 px-6 rounded-xl uppercase tracking-widest text-[10px] w-full" asChild>
                  <a href="tel:3238801224">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
