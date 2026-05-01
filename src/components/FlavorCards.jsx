import React, { useRef } from "react";
import { flavors } from "../data/flavors";
import RedCan from "./RedCan";
import PurpleCan from "./PurpleCan";
import Graphic from "./graphics/GraphicElements";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useScrollReveal } from "../hooks/useScrollReveal";

function FlavorDetail({ title, content, type }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.5, retrigger: true });

    return (
        <div ref={ref} className={`min-h-[60vh] flex flex-col justify-center transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}`}>
            <h3 className="font-heading text-4xl md:text-5xl uppercase mb-4 opacity-50">{title}</h3>
            {type === 'title' ? (
                <h2 className="font-heading text-[clamp(4rem,8vw,8rem)] leading-none uppercase drop-shadow-xl select-none">
                    {content}
                </h2>
            ) : type === 'description' ? (
                <p className="font-body text-2xl md:text-4xl font-bold bg-brand-black text-brand-offwhite p-6 inline-block brutal-border max-w-2xl transform -rotate-1 brutal-shadow">
                    {content}
                </p>
            ) : (
                <div className="flex flex-wrap gap-4">
                    {content.map((badge, i) => (
                        <span key={i} className="bg-brand-offwhite text-brand-black font-heading text-xl md:text-3xl uppercase py-3 px-6 brutal-border brutal-shadow transform rotate-1 hover:-rotate-2 transition-transform">
                            {badge}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

function FlavorScroller({ flavor }) {
    const [ref, progress] = useScrollProgress();

    // Map progress to rotation (-15 to 15 deg)
    const rotation = -15 + progress * 30;

    return (
        <div ref={ref} className={`relative w-full ${flavor.bgColor} ${flavor.textColor} border-t-8 border-brand-black`}>
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Graphic type="bubble" className={`w-[40vw] h-[40vw] top-10 left-10 opacity-20 border-${flavor.lightColor}`} />
                <Graphic type="circle-outline" className="w-[100vw] h-[100vw] bottom-[-50vw] right-[-50vw] animate-spin-slow opacity-10" />
            </div>

            <div className="w-full flex flex-col lg:flex-row relative z-10 max-w-[2000px] mx-auto">
                {/* STICKY CAN COLUMN */}
                <div className="w-full lg:w-1/2 h-screen sticky top-0 flex items-center justify-center p-8 pointer-events-none overflow-hidden">
                    <div
                        className="transition-transform duration-100 ease-linear drop-shadow-2xl will-change-transform"
                        style={{ transform: `rotate(${rotation}deg) scale(${1 + progress * 0.2})` }}
                    >
                        {flavor.id === 'guava-pear-mint' ? <RedCan /> : <PurpleCan />}
                    </div>
                </div>

                {/* SCROLLING DETAILS COLUMN */}
                <div className="w-full lg:w-1/2 min-h-[300vh] flex flex-col p-8 md:p-16 relative z-20 pb-[50vh]">
                    <div className="mt-[20vh]">
                        <FlavorDetail title="Flavor Profile" content={flavor.name} type="title" />
                        <FlavorDetail title="The Experience" content={flavor.description} type="description" />
                        <FlavorDetail title="Benefits" content={flavor.badges} type="badges" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FlavorCards() {
    return (
        <section className="w-full relative z-[25] bg-brand-offwhite border-t-8 border-brand-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            {flavors.map(flavor => (
                <FlavorScroller key={flavor.id} flavor={flavor} />
            ))}
        </section>
    );
}
