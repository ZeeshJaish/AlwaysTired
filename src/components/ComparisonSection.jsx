import { comparisonData } from "../data/comparison";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Graphic from "./graphics/GraphicElements";
import PurpleCan from "./PurpleCan";

function StatRow({ item, side }) {
    // We retrigger so elements slap in and out as user scrolls up/down
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1, retrigger: true, rootMargin: '-10% 0px -10% 0px' });

    const baseTranslate = side === 'them' ? '-translate-x-[20vw]' : 'translate-x-[20vw]';
    const transformStyle = isVisible ? 'translate-x-0 opacity-100' : `${baseTranslate} opacity-0`;

    return (
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
    );
}

export default function ComparisonSection() {
    return (
        <section className="w-full flex flex-col md:flex-row brutal-border border-y-4 border-x-0 relative bg-brand-black z-20 pb-[20vh]">
            {/* THEM Column */}
            <div className="w-full md:w-1/2 bg-brand-red text-brand-offwhite p-8 md:p-16 min-h-[100vh] border-b-4 md:border-b-0 md:border-r-4 border-brand-black relative flex flex-col justify-start pt-32">
                <Graphic type="circle-outline" className="w-[50vw] h-[50vw] top-1/2 right-[-25vw] transform -translate-y-1/2" />
                <Graphic type="logo-mark" className="top-10 left-10 text-white" />

                <div className="sticky top-20 z-20 mb-32">
                    <h2 className="font-heading text-[clamp(4rem,10vw,8rem)] leading-none uppercase transform -rotate-3 text-stroke-white opacity-40 inline-block bg-brand-red p-4 border-4 border-brand-black brutal-shadow">
                        Them
                    </h2>
                </div>

                <div className="flex flex-col gap-24 relative z-10 w-full mb-32">
                    {comparisonData.map((item, i) => (
                        <StatRow key={`them-${i}`} item={item} side="them" />
                    ))}
                </div>
            </div>

            {/* US Column */}
            <div className="w-full md:w-1/2 bg-brand-purple text-brand-offwhite p-8 md:p-16 min-h-[100vh] relative flex flex-col justify-start pt-32">
                <div className="absolute top-[10%] right-[-10%] opacity-30 z-0 select-none pointer-events-none mix-blend-screen transform rotate-[15deg]">
                    <PurpleCan />
                </div>

                <div className="sticky top-20 z-20 mb-32 ml-auto">
                    <h2 className="font-heading text-[clamp(4rem,10vw,8rem)] leading-none uppercase transform rotate-3 text-brand-mint [text-shadow:_4px_4px_0_rgb(0_0_0_/_100%)] bg-brand-purple p-4 border-4 border-brand-black brutal-shadow">
                        Us
                    </h2>
                </div>

                <div className="flex flex-col gap-24 relative z-10 w-full mb-32">
                    {comparisonData.map((item, i) => (
                        <StatRow key={`us-${i}`} item={item} side="us" />
                    ))}
                </div>
            </div>
        </section>
    );
}
