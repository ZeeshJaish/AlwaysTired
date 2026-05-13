import { useState } from "react";
import { flavors } from "../data/flavors";
import RedCan from "./RedCan";
import PurpleCan from "./PurpleCan";
import Graphic from "./graphics/GraphicElements";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useScrollReveal } from "../hooks/useScrollReveal";

function VibeTag({ tag, index }) {
    const rotations = [-5, 6, -3, 8, -6, 4];
    const rotation = rotations[index % rotations.length];
    return (
        <span
            className="inline-block bg-brand-offwhite text-brand-black font-heading text-base md:text-xl uppercase py-2 px-4 border-4 border-brand-black shadow-hard-sm transform cursor-default select-none"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            {tag}
        </span>
    );
}

function FlavorDetail({ title, content, type }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.2, retrigger: true, rootMargin: '-5% 0px -5% 0px' });

    return (
        <div ref={ref} className={`min-h-[42vh] lg:min-h-[50vh] flex flex-col justify-center transition-all duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-70 translate-y-6 scale-[0.98]'}`}>
            <h3 className="font-heading text-3xl md:text-4xl uppercase mb-4 opacity-50">{title}</h3>
            {type === 'title' ? (
                <h2 className="font-heading text-[clamp(3rem,7vw,7rem)] leading-none uppercase drop-shadow-xl select-none">
                    {content}
                </h2>
            ) : type === 'personality' ? (
                <p className="font-body text-2xl md:text-3xl italic font-bold bg-brand-black text-brand-offwhite p-6 inline-block brutal-border max-w-2xl transform -rotate-1 brutal-shadow">
                    "{content}"
                </p>
            ) : type === 'description' ? (
                <p className="font-body text-xl md:text-3xl font-bold bg-brand-black text-brand-offwhite p-6 inline-block brutal-border max-w-2xl transform rotate-1 brutal-shadow">
                    {content}
                </p>
            ) : (
                <div className="flex flex-wrap gap-3">
                    {content.map((tag, i) => (
                        <VibeTag key={i} tag={tag} index={i} />
                    ))}
                </div>
            )}
        </div>
    );
}

function FlavorScroller({ flavor }) {
    const [ref, progress] = useScrollProgress();
    const [isHovered, setIsHovered] = useState(false);

    const easedProgress = Math.max(0, Math.min(1, progress));
    const rotation = -10 + easedProgress * 20;
    const scale = 1 + easedProgress * 0.08;

    return (
        <div
            ref={ref}
            className={`relative w-full ${flavor.bgColor} ${flavor.textColor} border-t-8 border-brand-black char-glitch-hover grain-overlay`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Graphic type="bubble" className={`w-[40vw] h-[40vw] top-10 left-10 opacity-20 border-${flavor.lightColor}`} />
                <Graphic type="circle-outline" className="w-[100vw] h-[100vw] bottom-[-50vw] right-[-50vw] animate-spin-slow opacity-10" />
            </div>

            {/* Scattered sticker badges */}
            <div className="sticker-badge bg-brand-mint text-brand-black text-xs md:text-sm top-[5%] right-[3%] rotate-[6deg]">VEGAN ✓</div>
            <div className="sticker-badge bg-brand-offwhite text-brand-black text-xs md:text-sm top-[30%] right-[5%] rotate-[-4deg]">NO BS</div>

            <div className="w-full flex flex-col lg:flex-row relative z-10 max-w-[2000px] mx-auto">
                {/* STICKY CAN COLUMN */}
                <div className="w-full lg:w-1/2 h-[78vh] lg:h-screen lg:sticky top-0 flex flex-col items-center justify-center p-6 md:p-8 pointer-events-none overflow-hidden">
                    {/* Character name — massive, behind the can */}
                    <h2 className={`char-name font-heading text-[clamp(2.4rem,9vw,4rem)] lg:text-[clamp(3.5rem,7vw,8rem)] leading-[0.85] uppercase absolute top-[12%] left-1/2 w-[92%] -translate-x-1/2 opacity-20 whitespace-normal break-words text-center z-0 select-none ${isHovered ? 'animate-glitch-rgb' : ''}`}>
                        {flavor.character}
                    </h2>

                    <div
                        className="transition-transform duration-300 ease-out drop-shadow-2xl will-change-transform relative z-10"
                        style={{ transform: `rotate(${rotation}deg) scale(${scale})` }}
                    >
                        {flavor.id === 'guava-pear-mint' ? <RedCan /> : <PurpleCan />}
                    </div>
                </div>

                {/* SCROLLING DETAILS COLUMN */}
                <div className="w-full lg:w-1/2 min-h-[220vh] lg:min-h-[300vh] flex flex-col p-8 md:p-16 relative z-20 pb-24 lg:pb-[50vh]">
                    <div className="mt-0 lg:mt-[20vh]">
                        {/* Character name at top in massive type */}
                        <div className="mb-8">
                            <h2 className={`font-heading text-[clamp(2.8rem,11vw,6rem)] lg:text-[clamp(3rem,6vw,7rem)] leading-[0.9] uppercase tracking-tight max-w-full break-words ${flavor.accentColor || ''}`}>
                                {flavor.character}
                            </h2>
                            <p className="font-body text-xl md:text-2xl italic font-bold mt-3 opacity-80">
                                "{flavor.personality}"
                            </p>
                        </div>

                        <FlavorDetail title="Flavor Profile" content={flavor.name} type="title" />
                        <FlavorDetail title="The Experience" content={flavor.description} type="description" />
                        <FlavorDetail title="Vibe Tags" content={flavor.vibeTags} type="tags" />
                        <FlavorDetail title="Benefits" content={flavor.badges} type="tags" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FlavorCards() {
    return (
        <section className="w-full relative z-[25] bg-brand-offwhite border-t-8 border-brand-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            {/* Section header */}
            <div className="bg-brand-black text-brand-offwhite text-center py-16 px-4">
                <h2 className="font-heading text-[clamp(2.5rem,8vw,6rem)] uppercase leading-none">
                    MEET THE CANS <span className="text-brand-red">→</span>
                </h2>
                <p className="font-body text-lg md:text-2xl font-bold mt-4 opacity-60">Two flavors. Two anti-heroes. Zero compromise.</p>
            </div>
            {flavors.map(flavor => (
                <FlavorScroller key={flavor.id} flavor={flavor} />
            ))}
        </section>
    );
}
