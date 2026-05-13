import { useScrollReveal } from '../hooks/useScrollReveal';

const storyLines = [
    { text: "Delhi runs hard. Late nights. Deadlines. Chai number 4.", align: 'left', indent: 0 },
    { text: "And every time you reached for a soda — you were destroying your gut without knowing it.", align: 'right', indent: 1, highlight: true },
    { text: "40g of sugar. Artificial colors. Zero nutrition. Just vibes and damage.", align: 'left', indent: 2, underline: 'vibes and damage' },
    { text: "We were tired of it. Always Tired, actually.", align: 'center', indent: 0, highlight: true },
    { text: "So we built the soda we wanted to drink. Low sugar. Prebiotic. Plant based. No BS.", align: 'left', indent: 1 },
    { text: "Not for the gym rats. Not for the clean eaters. For everyone grinding through the day who just wants a drink that doesn't hate them back.", align: 'right', indent: 0 },
];

const proofCards = [
    { stat: '4g', label: 'sugar only', note: 'Built for daily sipping, not a sugar crash.' },
    { stat: '7g', label: 'prebiotic fiber', note: 'A soda that gives your gut something useful.' },
    { stat: '0', label: 'fake color drama', note: 'Plant based, low sugar, and no label gymnastics.' },
];

function StoryLine({ line, index }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.3, retrigger: true, rootMargin: '-5% 0px -5% 0px' });

    const alignClass = line.align === 'right' ? 'ml-auto text-right' : line.align === 'center' ? 'mx-auto text-center' : 'mr-auto text-left';
    const indentClass = line.indent === 1 ? 'md:pl-16' : line.indent === 2 ? 'md:pl-32' : '';

    return (
        <div
            ref={ref}
            className={`max-w-4xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-4'} ${alignClass} ${indentClass}`}
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            <p className={`font-body text-xl md:text-3xl lg:text-4xl font-bold leading-snug ${line.highlight ? 'text-brand-mint' : 'text-brand-offwhite'}`}>
                {line.underline ? (
                    <>
                        {line.text.split(line.underline)[0]}
                        <span className="hand-underline">{line.underline}</span>
                        {line.text.split(line.underline)[1]}
                    </>
                ) : line.text}
            </p>
        </div>
    );
}

export default function OriginStory() {
    const [headRef, headVisible] = useScrollReveal({ threshold: 0.3 });
    const [finalRef, finalVisible] = useScrollReveal({ threshold: 0.5 });

    return (
        <section className="w-full bg-brand-black relative z-[35] overflow-hidden grain-overlay">
            {/* Scratch/grain texture */}
            <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay opacity-40 z-0"></div>

            {/* Scattered sticker badges */}
            <div className="sticker-badge bg-brand-mint text-brand-black text-sm md:text-base top-[8%] right-[5%] rotate-[6deg]">NO BS</div>
            <div className="sticker-badge bg-brand-yellow text-brand-black text-sm md:text-base top-[25%] left-[3%] rotate-[-4deg]">STAY TIRED</div>
            <div className="sticker-badge bg-brand-offwhite text-brand-black text-sm md:text-base bottom-[20%] right-[8%] rotate-[8deg]">4g SUGAR ONLY</div>

            {/* Hand-drawn SVG decorative circle */}
            <svg className="absolute top-[15%] left-[60%] w-32 h-32 md:w-48 md:h-48 opacity-20 pointer-events-none" viewBox="0 0 100 100">
                <ellipse cx="50" cy="50" rx="42" ry="38" fill="none" stroke="#00fa9a" strokeWidth="2.5" strokeDasharray="8 4" transform="rotate(-5 50 50)" />
            </svg>

            {/* Hand-drawn arrow SVG */}
            <svg className="absolute bottom-[30%] left-[5%] w-24 h-24 md:w-32 md:h-32 opacity-15 pointer-events-none" viewBox="0 0 100 100">
                <path d="M20 80 Q40 30, 70 25 L60 20 M70 25 L65 35" fill="none" stroke="#dd3840" strokeWidth="3" strokeLinecap="round" />
            </svg>

            <div className="relative z-10 px-6 md:px-16 lg:px-24 py-20 md:py-28">
                {/* Headline */}
                <div ref={headRef} className="mb-8 md:mb-10">
                    <h2 className={`font-heading text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] uppercase text-brand-offwhite transform -rotate-1 ${headVisible ? 'glitch-rgb' : 'opacity-0'}`}>
                        WE DIDN'T START<br />
                        A BRAND.<br />
                        <span className="text-brand-red">WE FIXED A<br />PROBLEM.</span>
                    </h2>
                    {/* Action symbols */}
                    <span className="font-heading text-6xl md:text-8xl text-brand-mint inline-block mt-4 animate-drift-slow">⚡</span>
                </div>

                <div className="grid gap-5 md:grid-cols-3 mb-16 md:mb-20">
                    {proofCards.map((card, index) => (
                        <div
                            key={card.label}
                            className="bg-brand-offwhite text-brand-black brutal-border brutal-shadow p-5 md:p-7 transform"
                            style={{ transform: `rotate(${[-2, 1, -1][index]}deg)` }}
                        >
                            <p className="font-heading text-[clamp(3rem,8vw,6rem)] leading-none text-brand-red uppercase">
                                {card.stat}
                            </p>
                            <h3 className="font-heading text-2xl md:text-3xl uppercase mt-3">
                                {card.label}
                            </h3>
                            <p className="font-body text-base md:text-lg font-black mt-4">
                                {card.note}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Story Lines — staggered zine layout */}
                <div className="flex flex-col gap-8 md:gap-12 mb-16 md:mb-24">
                    {storyLines.map((line, i) => (
                        <StoryLine key={i} line={line} index={i} />
                    ))}
                </div>

                {/* Final punchy line — massive type */}
                <div ref={finalRef} className="relative">
                    <h3 className={`font-heading text-[clamp(2rem,7vw,6rem)] leading-[0.85] uppercase text-brand-offwhite max-w-6xl ${finalVisible ? 'glitch-rgb' : 'opacity-0'}`}>
                        ALWAYS TIRED SITS IN THE GAP{' '}
                        <span className="hand-underline text-brand-mint">NOBODY OWNS.</span>
                    </h3>
                    <span className="font-heading text-5xl md:text-7xl text-brand-red absolute -right-2 -top-8 rotate-12 pointer-events-none">💥</span>
                </div>
            </div>
        </section>
    );
}
