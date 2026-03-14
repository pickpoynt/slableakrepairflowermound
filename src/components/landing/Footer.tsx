import { Phone, MapPin, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative border-t border-amber-600/20">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <ShieldCheck className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none tracking-tight text-white uppercase">Broomfield CO</span>
                <span className="text-sm font-medium text-amber-500 uppercase tracking-widest text-[10px]">Pantry Moth Experts</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium italic">
              Broomfield's trusted name for comprehensive pantry moth elimination. We utilize structural sanitation, pheromone targeting, and biological growth regulators to keep your kitchen secure and pure.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Treatments</h4>
            <ul className="space-y-4">
              {["Pheromone Catch", "Structural Flush", "Growth Regulators", "Pantry Guard", "Larvae Extraction"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {["Specialists", "Service Area", "Knowledge Base", "Lease This Number"].map((item) => (
                <li key={item}>
                  <a href={item === "Lease This Number" ? "/lease-my-number" : "#"} className="text-slate-400 hover:text-amber-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">NAP</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-500 shrink-0" />
                <address className="text-slate-400 not-italic font-medium leading-relaxed">
                  Broomfield CO Pantry Moth Experts<br />
                  Broomfield, CO 80020<br />
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-heading">ZIP CODES: 80020, 80021, 80023, 80031, 80038</span>
                </address>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-amber-500 shrink-0" />
                <a href="tel:3238801224" className="text-xl font-bold text-white hover:text-amber-500 transition-colors">
                  (323) 880-1224
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm font-medium italic mb-4">
            © {new Date().getFullYear()} Broomfield CO Pantry Moth Experts. Professional Pantry Moth Exterminator Broomfield. No Free Quotes.
          </p>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-slate-400 text-sm mb-4 uppercase font-bold tracking-widest">
              For support or inquiries, please email <a href="mailto:leasemynumber@gmail.com" className="text-amber-500 hover:underline">LEASE MY NUMBER</a> AND LINK IT TO <a href="/lease-my-number" className="text-amber-500 hover:underline">LEASE PAGE</a>
            </p>
            <p className="text-[10px] text-slate-600 leading-relaxed font-medium">
              This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
