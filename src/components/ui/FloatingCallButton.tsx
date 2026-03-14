import { Phone } from "lucide-react";

const FloatingCallButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
            <a
                href="tel:3238801224"
                className="group relative flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Call Clarksdale MS Cockroach Exterminator Experts"
            >
                <div className="absolute inset-0 rounded-full bg-indigo-50 animate-ping opacity-20 group-hover:opacity-40"></div>
                <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-indigo-600 fill-indigo-600/10" />
                </div>
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
            </a>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-200 shadow-sm animate-pulse">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Roach Team On Standby - Clarksdale, MS - (323) 880-1224</span>
            </div>
        </div>
    );
};

export default FloatingCallButton;
