import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const rotatingLines = [
    "NCR's first prebiotic soda is here. You're welcome.",
    "From Connaught Place to your gut — Always Tired.",
    "Built for the grind. Bottled for Delhi.",
];

export default function DelhiIdentity() {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });
    const [lineIndex, setLineIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setLineIndex(prev => (prev + 1) % rotatingLines.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section ref={ref} className="w-full bg-brand-black text-brand-offwhite relative z-[45] overflow-hidden grain-overlay">
            <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay opacity-30"></div>

            {/* Scattered sticker badges */}
            <div className="sticker-badge bg-brand-red text-brand-offwhite text-sm top-[10%] right-[8%] rotate-[-5deg]">DELHI NCR 📍</div>
            <div className="sticker-badge bg-brand-mint text-brand-black text-sm bottom-[15%] left-[5%] rotate-[7deg]">7g FIBER</div>

            {/* Hand-drawn arrow */}
            <svg className="absolute top-[20%] right-[25%] w-20 h-20 opacity-15 pointer-events-none" viewBox="0 0 100 100">
                <path d="M80 20 Q50 50, 30 75 L35 65 M30 75 L20 70" fill="none" stroke="#00fa9a" strokeWidth="3" strokeLinecap="round" />
            </svg>

            <div className="relative z-10 px-6 md:px-16 lg:px-24 py-24 md:py-40 text-center flex flex-col items-center">
                {/* Headline */}
                <h2 className={`font-heading text-[clamp(3rem,12vw,10rem)] leading-[0.85] uppercase mb-4 transition-all duration-700 ${isVisible ? 'glitch-rgb' : 'opacity-0'}`}>
                    DELHI RUNS HARD.
                </h2>

                {/* Second line — outlined/hollow */}
                <h3 className={`font-heading text-[clamp(1.5rem,5vw,4rem)] leading-tight uppercase text-stroke-mint mb-12 md:mb-20 transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    YOUR GUT SHOULDN'T PAY FOR IT.
                </h3>

                {/* Rotating lines */}
                <div className="h-16 md:h-20 flex items-center justify-center mb-12 md:mb-16 overflow-hidden relative w-full max-w-3xl">
                    {rotatingLines.map((line, i) => (
                        <p
                            key={i}
                            className={`font-body text-xl md:text-3xl font-bold absolute transition-all duration-500 ease-out w-full ${i === lineIndex
                                    ? 'opacity-100 translate-y-0'
                                    : i === (lineIndex - 1 + rotatingLines.length) % rotatingLines.length
                                        ? 'opacity-0 -translate-y-8'
                                        : 'opacity-0 translate-y-8'
                                }`}
                        >
                            {line}
                        </p>
                    ))}
                </div>

                {/* CTA Button */}
                <a
                    href="https://instagram.com/alwaystired"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-offwhite text-brand-black font-heading text-2xl md:text-4xl uppercase py-5 px-10 border-4 border-brand-black shadow-hard hover:bg-brand-red hover:text-brand-offwhite transition-none cursor-pointer transform hover:-rotate-1 hover:scale-105 active:scale-95"
                >
                    [ DM TO ORDER → ]
                </a>

                {/* Small print */}
                <p className="font-body text-sm md:text-base text-brand-offwhite opacity-60 mt-8 max-w-md">
                    Available in Delhi NCR. More cities soon. Or just move to Delhi.
                </p>

                {/* Action symbols */}
                <div className="flex gap-6 mt-10 text-4xl md:text-6xl opacity-30 pointer-events-none">
                    <span className="animate-drift-slow">⚡</span>
                    <span className="animate-drift-fast">✦</span>
                    <span className="animate-drift-slow">💥</span>
                </div>
            </div>
        </section>
    );
}
