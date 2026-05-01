import { useScrollReveal } from "../hooks/useScrollReveal";
import Graphic from "./graphics/GraphicElements";

export default function ManifestoStrip() {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.5 });

    return (
        <section
            ref={ref}
            className="sticky top-0 z-[30] min-h-screen w-full bg-brand-mint text-brand-black py-32 px-4 brutal-border border-x-0 border-b-8 flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay opacity-30"></div>

            <Graphic type="logo-mark" className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-brand-purple opacity-20 text-[30vw] animate-pulse" />
            <Graphic type="sticker-vegan" className="top-[10%] left-[5%] md:left-[20%] animate-drift-fast" />

            <div className="relative z-10 max-w-[100vw] mx-auto text-center flex flex-col items-center w-full">
                <h2 className={`font-heading text-[clamp(6rem,18vw,20rem)] uppercase leading-[0.8] tracking-tighter ${isVisible ? 'animate-glitch' : 'opacity-0'} [animation-duration:0.2s] [animation-iteration-count:3]`}>
                    Stop <span className="text-stroke-red text-transparent block">Hiding</span>
                </h2>
                <h2 className={`font-heading text-[clamp(4rem,10vw,12rem)] uppercase leading-none mt-4 tracking-tighter text-brand-purple transition-opacity duration-500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    Behind Fake Energy.
                </h2>

                <p className={`font-body text-2xl md:text-5xl font-black mt-16 bg-brand-offwhite px-8 py-6 brutal-border brutal-shadow transform rotate-2 hover:-rotate-1 transition-transform duration-100 text-brand-black max-w-4xl mx-auto w-full transition-opacity duration-500 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    No crashes. No jitters. Just pure, unadulterated focus.
                </p>
            </div>
        </section>
    );
}
