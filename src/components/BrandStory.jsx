import { useScrollReveal } from "../hooks/useScrollReveal";
import Graphic from "./graphics/GraphicElements";

export default function BrandStory() {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });

    return (
        <section
            ref={ref}
            className="w-full min-h-screen bg-brand-black text-brand-offwhite pt-32 pb-48 px-8 md:px-24 relative z-[40] flex flex-col md:flex-row items-center justify-between gap-12 border-t-8 border-brand-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
        >
            <Graphic type="bubble" className="w-[80vw] h-[80vw] border-brand-purple border-opacity-40 -top-1/4 -right-1/4" />
            <Graphic type="bubble" className="w-[40vw] h-[40vw] border-brand-red border-opacity-20 bottom-0 left-0" />

            <div className="flex-1 z-30 relative w-full md:w-1/2">
                <h2 className="font-heading text-[clamp(4rem,12vw,8rem)] leading-[0.8] uppercase mb-12 border-b-8 border-brand-red pb-8 inline-block transform -rotate-1 text-stroke-white opacity-90">
                    The Story
                </h2>
                <div className="font-body text-2xl md:text-4xl space-y-12 w-full max-w-4xl font-black relative">
                    <p className={`transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'}`}>
                        We got tired of drinking the same pastel-colored, softly branded waters pretending to give us energy.
                    </p>
                    <p className={`text-brand-mint bg-brand-purple p-8 md:p-12 brutal-border brutal-shadow transform rotate-2 text-3xl md:text-5xl transition-all duration-700 delay-200 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'}`}>
                        So we made this. It doesn't apologize. It doesn't blend in. It just works.
                    </p>
                    <p className={`transition-all duration-700 delay-400 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                        Welcome to the resistance against boring beverages. Stay cool. Stay tired. Stay you.
                    </p>
                </div>
            </div>

            <div className="flex-1 relative w-full h-[80vh] z-20 mt-24 md:mt-0">
                <div
                    className="absolute top-0 right-0 md:right-[10%] w-[150%] md:w-[120%] max-w-[800px] h-full transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                    style={{
                        transform: isVisible ? 'translateX(0) translateY(0) rotate(12deg)' : 'translateX(100%) translateY(20%) rotate(45deg)',
                    }}
                >
                    <Graphic type="red-can" className="w-[80%] opacity-80 mix-blend-screen" />
                </div>

                <div
                    className="absolute top-[20%] right-[30%] md:right-[40%] w-[150%] md:w-[120%] max-w-[800px] h-full transition-all duration-1000 delay-200 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                    style={{
                        transform: isVisible ? 'translateX(0) translateY(0) scale(0.8) rotate(-15deg)' : 'translateX(-100%) translateY(20%) scale(0.5) rotate(-45deg)',
                    }}
                >
                    <Graphic type="purple-can" className="w-[80%] opacity-80 mix-blend-screen" />
                </div>
            </div>

            <Graphic type="sticker-vegan" className="bottom-[10%] right-[10%] z-40 transform scale-150 animate-drift-slow" />
        </section>
    );
}
