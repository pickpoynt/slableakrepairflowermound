import { Button } from "@/components/ui/button";
import { Locate, Phone, ShieldCheck, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 mb-6 font-bold uppercase tracking-wider text-sm shadow-sm">
            <Locate className="w-4 h-4" />
            CLARKSDALE MS COCKROACH EXTERMINATOR EXPERTS
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight uppercase tracking-tight">
            Professional <span className="text-amber-600">Cockroach Exterminator Clarksdale MS</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
            Protect your Clarksdale home from cockroach infestations. Our licensed team provides same-day assessment, precision gel bait and residual treatments, and full-property roach elimination across Clarksdale, MS and surrounding Coahoma County areas.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group border-b border-slate-100 pb-8">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 border border-slate-100">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">ROACH HOTLINE</p>
                <a href="tel:3238801224" className="text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors uppercase tracking-tight">
                  (323) 880-1224
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 border-b border-slate-100 pb-8">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-amber-600 border border-slate-100">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">LOCAL CERTIFICATION</p>
                <p className="text-xl font-bold text-slate-900 uppercase tracking-tight">Licensed Coahoma County Pest Control Specialists</p>
              </div>
            </div>

            <div className="flex items-start gap-5 border-b border-slate-100 pb-8">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-amber-600 border border-slate-100">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">NAP</p>
                <p className="text-xl font-bold text-slate-900 uppercase tracking-tight">Clarksdale MS Cockroach Exterminator Experts</p>
                <p className="text-slate-500 font-medium text-sm">Clarksdale, MS 38614</p>
                <p className="text-slate-500 font-medium text-sm">(323) 880-1224</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-amber-900/10 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-widest">Inquiry</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Property Owner</label>
                <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium" placeholder="Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Phone</label>
                <input type="tel" className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium" placeholder="(323) 880-1224" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Service Needed</label>
              <select className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium">
                <option>Cockroach Extermination</option>
                <option>Nest & Source Elimination</option>
                <option>German Roach Control</option>
                <option>Prevention & Sealing</option>
                <option>Roach Inspection</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Service Details</label>
              <textarea rows={4} className="w-full bg-slate-50 border-slate-200 rounded-xl p-6 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium" placeholder="Describe your roach problem (rooms affected, duration, species if known)..."></textarea>
            </div>
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white h-16 rounded-xl text-lg font-bold shadow-lg shadow-amber-900/20 uppercase tracking-widest transition-all">
              Request Service Review
            </Button>
            <p className="text-center text-slate-500 text-sm italic font-medium">
              *Serving Clarksdale, Coahoma, Friars Point, and surrounding Coahoma County areas.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
