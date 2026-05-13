import { useScrollReveal } from "../hooks/useScrollReveal";
import Graphic from "./graphics/GraphicElements";

export default function ManifestoStrip() {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.5 });

    return (
        <section
            ref={ref}
            className="sticky top-0 z-[30] min-h-screen w-full bg-brand-mint text-brand-black py-32 px-4 brutal-border border-x-0 border-b-8 flex flex-col items-center justify-center overflow-hidden grain-overlay"
        >
            <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay opacity-30"></div>

            <Graphic type="logo-mark" className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-brand-purple opacity-20 text-[30vw] animate-pulse" />

            {/* Scattered stickers */}
            <div className="sticker-badge bg-brand-red text-brand-offwhite text-sm top-[15%] right-[8%] rotate-[5deg]">NO BS</div>
            <div className="sticker-badge bg-brand-offwhite text-brand-black text-sm bottom-[12%] left-[10%] rotate-[-7deg]">STAY TIRED</div>

            {/* Hand-drawn circle SVG */}
            <svg className="absolute top-[20%] left-[8%] w-28 h-28 md:w-40 md:h-40 opacity-15 pointer-events-none" viewBox="0 0 100 100">
                <ellipse cx="50" cy="50" rx="40" ry="35" fill="none" stroke="#46308c" strokeWidth="3" strokeDasharray="6 5" transform="rotate(8 50 50)" />
            </svg>

            <div className="relative z-10 max-w-[100vw] mx-auto text-center flex flex-col items-center w-full">
                <h2 className={`font-heading text-[clamp(5rem,16vw,18rem)] uppercase leading-[0.8] tracking-tighter ${isVisible ? 'glitch-rgb' : 'opacity-0'}`}>
                    Stop <span className="text-stroke-red text-transparent block">Hiding</span>
                </h2>
                <h2 className={`font-heading text-[clamp(3rem,8vw,10rem)] uppercase leading-none mt-4 tracking-tighter text-brand-purple transition-opacity duration-500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    Behind Fake Energy.
                </h2>

                <p className={`font-body text-xl md:text-4xl font-black mt-12 bg-brand-offwhite px-8 py-6 brutal-border brutal-shadow transform rotate-2 hover:-rotate-1 transition-transform duration-100 text-brand-black max-w-4xl mx-auto w-full transition-opacity duration-500 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    Your gut deserves truth. Not marketing. ⚡
                </p>
            </div>
        </section>
    );
}
