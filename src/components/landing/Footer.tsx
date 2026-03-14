import { Phone, MapPin, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <ShieldCheck className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none tracking-tight text-white uppercase">Clarksdale MS Cockroach</span>
                <span className="text-sm font-medium text-amber-500 uppercase tracking-widest text-[10px]">Exterminator Experts</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium italic">
              Clarksdale MS's rapid-response cockroach elimination team. We provide certified gel bait, residual, and IGR treatments to completely eradicate roach infestations throughout Clarksdale and surrounding Coahoma County.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {["Roach Extermination", "Nest Elimination", "German Roach Control", "Prevention & Sealing", "Monitoring Plans"].map((item) => (
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
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Coverage Area", "Contact Us", "Lease This Site"].map((item) => (
                <li key={item}>
                  <a href={item === "Lease This Site" ? "/lease-my-number" : "#"} className="text-slate-400 hover:text-amber-500 transition-colors font-medium flex items-center gap-2 group">
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
                  Clarksdale MS Cockroach Exterminator Experts<br />
                  Clarksdale, MS 38614
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
            © {new Date().getFullYear()} Clarksdale MS Cockroach Exterminator Experts. All rights reserved. Professional Cockroach Exterminator Clarksdale MS.
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
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
