import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Precision Void Injections",
    description: "Targeted application of dust and micro-encapsulated agents into the structural voids where Brown Recluse spiders aggregate and hide during the day.",
    image: "/2.jpeg",
    points: ["Wall Void Entry", "Basement Joist Flush", "Electrical Box Guard"]
  },
  {
    title: "Mechanical Enclosure",
    description: "Deep exclusion protocols including sealing window frames, baseboards, and plumbing penetrations to deny spiders access to your living quarters.",
    image: "/3.jpeg",
    points: ["Baseboard Sealing", "Plumbing Gaps", "Structural Fortification"]
  },
  {
    title: "Residual Perimeter Defense",
    description: "Application of specialized weather-resistant residuals to the home's exterior to intercept spiders before they penetrate the structural envelope.",
    image: "/1.jpeg",
    points: ["Foundation Shield", "Eave Protection", "Broomfield Secure"]
  },
  {
    title: "Eco-Biological Control",
    description: "Deployment of biological growth regulators and specialized monitors to break the reproductive cycle and track population reduction in hidden nodes.",
    image: "/4.jpeg",
    points: ["Cycle Disruption", "Node Monitoring", "24/7 Dispatch"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Specialized <span className="text-amber-600">Recluse Abatement In Broomfield</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Brown Recluse spiders are not like common household spiders. They are elusive, resilient, and require a specialized structural approach. In Broomfield, CO, our team provides the elite level of expertise needed for total eradication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <a href="#contact">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3 text-amber-500 shrink-0" />{pt}
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
