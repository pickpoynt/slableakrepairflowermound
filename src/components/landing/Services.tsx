import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Roach Extermination",
    description: "Full-property cockroach elimination using gel baits, residual insecticides, and crack-and-crevice applications targeting every nesting site in your Clarksdale home.",
    image: "/2.jpeg",
    points: ["Gel Bait Systems", "Residual Treatment", "Total Elimination"]
  },
  {
    title: "Nest & Source Elimination",
    description: "Precision identification and destruction of cockroach nesting sites — including wall voids, under appliances, and in crawl spaces — to stop reproduction at the source.",
    image: "/3.jpeg",
    points: ["Nest Destruction", "Void Treatment", "Source Removal"]
  },
  {
    title: "German Roach Control",
    description: "Specialized protocols targeting the most prolific indoor roach species, deploying IGR products and multiple-bait rotation strategies to prevent resistance development.",
    image: "/1.jpeg",
    points: ["IGR Treatment", "Bait Rotation", "Resistance Prevention"]
  },
  {
    title: "Prevention & Sealing",
    description: "Post-elimination exclusion services including entry point sealing, sanitation recommendations, and ongoing monitoring to prevent future cockroach re-entry.",
    image: "/4.jpeg",
    points: ["Entry Point Sealing", "Monitoring Plans", "Sanitation Advice"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Professional <span className="text-amber-600">Cockroach Exterminator Clarksdale MS</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Clarksdale homeowners trust our certified team for rapid cockroach lifecycle elimination and total property protection. We target every life stage and every hiding spot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <a href="#contact">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
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
