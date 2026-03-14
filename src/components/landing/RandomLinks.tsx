const links = [
  { text: "Wasp Nest Removal Hillsborough NC", url: "https://waspnestremovalhillsboroughnc.vercel.app/" },
  { text: "Earwig Exterminator Denver", url: "https://earwigexterminatordenver.vercel.app/" },
  { text: "Centipede Repellent Hawaii", url: "https://centipederepellenthawaii.vercel.app/" },
  { text: "Pest Control South Point Ohio", url: "https://pestcontrolsouthpointohio.vercel.app/" },
  { text: "Mosquito Control Eagle Point OR", url: "https://mosquitocontrolserviceeaglepointor.vercel.app/" },
  { text: "Spider Exterminator Holly Springs NC", url: "https://spiderexterminatorhollyspringsnc.vercel.app/" },
  { text: "Wasp Nest Removal Broomfield", url: "https://emergencywaspnestremovalbroomfield.vercel.app/" },
  { text: "Pantry Moth Exterminator Broomfield", url: "https://pantrymothexterminatorbroomfield.vercel.app/" },
  { text: "Cluster Fly Infestation Help Broomfield", url: "https://clusterflyinfestationhelpbroomfield.vercel.app/" },
];

const RandomLinks = () => {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-600 transition-colors font-bold uppercase tracking-widest text-[10px]"
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
