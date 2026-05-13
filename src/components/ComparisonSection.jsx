import { comparisonData } from "../data/comparison";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Graphic from "./graphics/GraphicElements";
import PurpleCan from "./PurpleCan";

function VerdictStrip({ text }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.5, retrigger: true, rootMargin: '-5% 0px -5% 0px' });

    return (
        <div
            ref={ref}
            className={`verdict-stamp ${isVisible ? 'stamped' : ''} bg-brand-mint text-brand-black font-heading text-sm md:text-lg uppercase py-3 px-6 border-4 border-brand-black shadow-hard mt-4 inline-block`}
        >
            {text}
        </div>
    );
}

function StatRow({ item, side }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1, retrigger: true, rootMargin: '-10% 0px -10% 0px' });

    const baseTranslate = side === 'them' ? '-translate-x-[20vw]' : 'translate-x-[20vw]';
    const transformStyle = isVisible ? 'translate-x-0 opacity-100' : `${baseTranslate} opacity-0`;

    return (
        <div className="w-full">
            <div
                ref={ref}
                className={`flex justify-between items-end border-b-4 border-brand-black pb-4 transition-all duration-[400ms] ease-out w-full ${transformStyle} ${side === 'us' ? 'text-brand-mint' : ''}`}
            >
                <span className={`font-body font-bold uppercase text-2xl ${side === 'us' ? 'text-brand-offwhite' : ''}`}>
                    {item.label}
                </span>
                <span className={`font-heading text-5xl md:text-6xl ${side === 'us' ? 'text-stroke-black [text-shadow:_4px_4px_0_rgb(0_0_0_/_100%)]' : ''}`}>
                    {side === 'them' ? item.them : item.us}
                </span>
            </div>
            {side === 'us' && <VerdictStrip text={item.verdict} />}
        </div>
    );
}

export default function ComparisonSection() {
    return (
        <section className="w-full flex flex-col relative bg-brand-black z-20 grain-overlay">
            {/* Section headline */}
            <div className="w-full text-center py-16 md:py-24 px-4 relative z-10">
                <h2 className="font-heading text-[clamp(2rem,6vw,5rem)] leading-[0.9] uppercase text-brand-offwhite mb-4">
                    THEY LIE WITH PRETTY CANS.{' '}
                    <span className="text-brand-red">WE DON'T.</span>
                </h2>
                <p className="font-body text-xl md:text-3xl font-bold text-brand-offwhite opacity-70">
                    40g sugar in your Coke. 4g in ours. <span className="hand-underline text-brand-mint">Do the math.</span>
                </p>
                <span className="font-heading text-5xl text-brand-red inline-block mt-4">💥</span>
            </div>

            <div className="flex flex-col md:flex-row brutal-border border-y-4 border-x-0">
                {/* THEM Column */}
                <div className="w-full md:w-1/2 bg-brand-red text-brand-offwhite p-8 md:p-16 min-h-[80vh] border-b-4 md:border-b-0 md:border-r-4 border-brand-black relative flex flex-col justify-start pt-24">
                    <Graphic type="circle-outline" className="w-[50vw] h-[50vw] top-1/2 right-[-25vw] transform -translate-y-1/2" />

                    <div className="sticky top-20 z-20 mb-24">
                        <h2 className="font-heading text-[clamp(4rem,10vw,8rem)] leading-none uppercase transform -rotate-3 text-stroke-white opacity-40 inline-block bg-brand-red p-4 border-4 border-brand-black brutal-shadow">
                            Them
                        </h2>
                    </div>

                    <div className="flex flex-col gap-20 relative z-10 w-full mb-24">
                        {comparisonData.map((item, i) => (
                            <StatRow key={`them-${i}`} item={item} side="them" />
                        ))}
                    </div>
                </div>

                {/* US Column */}
                <div className="w-full md:w-1/2 bg-brand-purple text-brand-offwhite p-8 md:p-16 min-h-[80vh] relative flex flex-col justify-start pt-24">
                    <div className="absolute top-[10%] right-[-10%] opacity-30 z-0 select-none pointer-events-none mix-blend-screen transform rotate-[15deg]">
                        <PurpleCan />
                    </div>

                    <div className="sticky top-20 z-20 mb-24 ml-auto">
                        <h2 className="font-heading text-[clamp(4rem,10vw,8rem)] leading-none uppercase transform rotate-3 text-brand-mint [text-shadow:_4px_4px_0_rgb(0_0_0_/_100%)] bg-brand-purple p-4 border-4 border-brand-black brutal-shadow">
                            Us
                        </h2>
                    </div>

                    <div className="flex flex-col gap-20 relative z-10 w-full mb-24">
                        {comparisonData.map((item, i) => (
                            <StatRow key={`us-${i}`} item={item} side="us" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
