import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Heat Treatment",
    description: "Whole-room thermal remediation raising temperatures to 120°F+ — the proven lethal threshold for bed bugs at all life stages including eggs — without harmful chemicals.",
    image: "/2.jpeg",
    points: ["100% Chemical-Free", "Kills All Life Stages", "One-Day Treatment"]
  },
  {
    title: "Residual Chemical Treatment",
    description: "EPA-registered insecticide applications to mattresses, box springs, baseboards, and hidden harborage areas providing weeks of residual killing power.",
    image: "/3.jpeg",
    points: ["Fast Knockdown", "Extended Residual", "Pet-Safe After Dry"]
  },
  {
    title: "Canine Bed Bug Detection",
    description: "Certified K-9 detection teams identify even single bed bugs and eggs with over 95% accuracy, pinpointing infestations before they spread.",
    image: "/1.jpeg",
    points: ["95%+ Accuracy", "Certified Teams", "Early Detection"]
  },
  {
    title: "Follow-Up & Warranty",
    description: "Mandatory follow-up inspections at 7 and 21 days post-treatment ensure total eradication with a service warranty backing every Zebulon NC job.",
    image: "/4.jpeg",
    points: ["Verified Results", "Service Warranty", "Peace of Mind"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Professional <span className="text-amber-600">Bed Bug Exterminator Zebulon NC</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Zebulon homeowners trust our certified team for rapid bed bug lifecycle elimination and total property restoration. We target every stage — from eggs to adults.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <a href="#contact">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3 text-amber-500 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
