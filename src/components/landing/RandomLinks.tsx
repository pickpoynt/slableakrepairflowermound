const links = [
  { text: "Bed Bug Exterminator in Wapakoneta Ohio", url: "https://bedbugexterminatorinwapakonetaohio.vercel.app/" },
  { text: "Bed Bug Heat Treatment Baltimore MD", url: "https://bedbugheattreatmentbaltimoremd.vercel.app/" },
  { text: "Brown Recluse Pest Control Nashville", url: "https://brownreclusepestcontrolnashville.vercel.app/" },
  { text: "Pest Control Baton Rouge", url: "https://pestcontrolbatonrouge.vercel.app/" },
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
