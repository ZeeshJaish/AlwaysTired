import Graphic from "./graphics/GraphicElements";
import RedCan from "./RedCan";
import { useScrollProgress } from "../hooks/useScrollProgress";

export default function Hero() {
    const [ref, progress] = useScrollProgress();

    // Map progress approx 0.4 -> 0.8 to a transition from purple to black
    const getBgStyle = () => {
        const p = Math.max(0, Math.min(1, (progress - 0.2) * 2));
        const r = Math.round(70 * (1 - p));
        const g = Math.round(48 * (1 - p));
        const b = Math.round(140 * (1 - p));
        return { backgroundColor: `rgb(${r},${g},${b})` };
    };

    const canTransform = `scale(${Math.max(1, 1.2 - (progress * 0.4))}) rotate(${-8 + (progress * 16)}deg)`;

    return (
        <section ref={ref} className="sticky top-0 z-10 w-full min-h-screen overflow-hidden flex flex-col justify-center items-center px-4" style={getBgStyle()}>
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay opacity-30 z-0"></div>

            {/* Background Particles / Bubbles */}
            <Graphic type="bubble" className="w-16 h-16 bottom-[-10%] left-[10%] animate-[bubbleRise_6s_linear_infinite]" />
            <Graphic type="bubble" className="w-32 h-32 bottom-[-20%] right-[20%] animate-[bubbleRise_10s_linear_infinite]" />
            <Graphic type="bubble" className="w-24 h-24 bottom-[-15%] left-[60%] animate-[bubbleRise_8s_linear_infinite]" />
            <Graphic type="bubble" className="w-12 h-12 bottom-[-5%] left-[80%] animate-[bubbleRise_5s_linear_infinite]" />
            <Graphic type="circle-outline" className="w-[80vw] h-[80vw] top-[-20%] left-[-20%] animate-spin-slow z-0" />

            {/* Massive Typographic Background */}
            <div className="relative z-10 w-full text-center flex flex-col items-center justify-center -mt-[10vh]">
                <h1 className="font-heading text-[clamp(5rem,20vw,25rem)] leading-[0.7] tracking-tighter m-0 uppercase text-brand-offwhite animate-glitch" style={{ animationDelay: '0s', animationIterationCount: 1, animationDuration: '0.8s' }}>
                    UNBOTTLE
                </h1>
                <h1 className="font-heading text-[clamp(5rem,20vw,25rem)] leading-[0.7] tracking-tighter m-0 uppercase text-stroke-red relative z-0 md:mt-[-4vw]">
                    THE TRUTH_
                </h1>

                {/* Floating Can Mockup with Glow (no white box) */}
                <div
                    className="absolute top-[60%] left-1/2 z-20 pointer-events-none w-auto"
                    style={{ transform: `translateX(-50%) ${canTransform}` }}
                >
                    <div className="animate-float-slow">
                        <RedCan />
                    </div>
                </div>
            </div>

            {/* Stickers - bleeding off edges */}
            <Graphic type="sticker-energy" className="top-[20%] right-[-5%] md:right-[5%] animate-drift-slow z-30" />
            <Graphic type="sticker-vegan" className="bottom-[15%] left-[-2%] md:left-[10%] animate-drift-fast z-30" />

            {/* CTA Button and Tagline */}
            <div className="relative z-30 mt-[35vh] md:mt-[30vh] flex flex-col items-center gap-6">
                <button className="bg-brand-mint text-brand-black font-heading text-4xl md:text-6xl uppercase py-6 px-12 brutal-border brutal-shadow hover:bg-brand-red hover:text-brand-offwhite transition-none cursor-pointer transform hover:-rotate-2 hover:scale-105 active:scale-95">
                    [ SIP THIS → ]
                </button>
                <p className="font-heading text-brand-offwhite text-sm md:text-xl uppercase tracking-widest bg-brand-black px-6 py-2 brutal-border">
                    Energy for the tired in all of us.
                </p>
            </div>
        </section>
    );
}
