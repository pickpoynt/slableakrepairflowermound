const links = [
  { text: "Pest Control Baton Rouge", url: "https://pestcontrolbatonrouge.vercel.app/" },
  { text: "Brown Recluse Spider Control LaGrange", url: "https://brownreclusespidercontrollagrange.vercel.app/" },
  { text: "Wildlife Removal Gastonia NC", url: "https://wildliferemovalgastonianc.vercel.app/" },
  { text: "Smoke Odor Removal Nashville", url: "https://smokeodorremovalnashville.vercel.app/" },
];

const RandomLinks = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-600 transition-colors text-sm font-medium uppercase tracking-widest"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
