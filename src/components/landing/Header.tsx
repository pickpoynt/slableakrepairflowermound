import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-lg border-b border-amber-50" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${isScrolled ? "bg-amber-600" : "bg-white/10 backdrop-blur-md border border-white/20 rotate-[-10deg] group-hover:rotate-0"}`}>
              <ShieldCheck className={`w-7 h-7 ${isScrolled ? "text-white" : "text-amber-400"}`} />
            </div>
            <div>
              <span className={`font-heading font-bold text-xl md:text-2xl block leading-none tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>
                Clarksdale MS Cockroach
              </span>
              <span className={`text-sm font-bold uppercase tracking-[0.2em] ${isScrolled ? "text-amber-600" : "text-amber-400"}`}>
                Exterminator <span className="text-[10px] opacity-70">Experts</span>
              </span>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-8">
            {["services", "why-us", "faq", "contact"].map((link) => (
              <a key={link} href={`#${link}`} className={`text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 ${isScrolled ? "text-slate-600 hover:text-amber-600" : "text-white/90 hover:text-white"}`}>
                {link.replace("-", " ")}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex flex-col items-end ${isScrolled ? "text-slate-900" : "text-white"}`}>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">ROACH HOTLINE</span>
              <a href="tel:3238801224" className="text-xl font-bold hover:text-amber-500 transition-colors tracking-tighter leading-none mt-1">(323) 880-1224</a>
            </div>
            <Button className={`${isScrolled ? "bg-amber-600 hover:bg-amber-700" : "bg-white text-slate-900 hover:bg-amber-50"} h-12 px-8 rounded-xl font-bold shadow-xl transition-all hover:-translate-y-0.5`} asChild>
              <a href="tel:3238801224">Click to Call</a>
            </Button>
          </div>

          <button className="xl:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className={`w-8 h-8 ${isScrolled ? "text-slate-900" : "text-white"}`} /> : <Menu className={`w-8 h-8 ${isScrolled ? "text-slate-900" : "text-white"}`} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 text-white p-6 absolute top-full left-0 right-0 border-t border-slate-800 h-screen">
          <div className="flex flex-col gap-6">
            {["Services", "Why Us", "FAQ", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-lg font-bold tracking-wide hover:text-amber-400 transition-colors py-2 border-b border-slate-800" onClick={() => setIsMobileMenuOpen(false)}>{item}</a>
            ))}
            <div className="pt-6 text-center">
              <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest font-bold">ROACH HOTLINE</p>
              <a href="tel:3238801224" className="text-3xl font-bold text-amber-400 block mb-6 px-4 py-3 bg-white/5 rounded-2xl border border-white/10">(323) 880-1224</a>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white h-14 text-lg font-bold rounded-xl" asChild>
                <a href="tel:3238801224">Click to Call</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
