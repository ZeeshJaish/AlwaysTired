const marqueeItems = [
    "⚡ FIX YOUR GUT",
    "✦ KEEP YOUR VIBE",
    "💥 4g SUGAR",
    "★ 7g PREBIOTIC FIBER",
    "⚡ NO BS",
    "✦ ADAPTOGEN POWERED",
    "💥 VEGAN",
    "★ SIP. RECOVER. REPEAT.",
    "⚡ DELHI NCR 📍",
    "✦ THE ONLY SODA YOUR GUT WON'T HATE",
];

function MarqueeTrack({ items, reverse = false, speed = '20s' }) {
    const animClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';
    return (
        <div className={`flex whitespace-nowrap overflow-hidden ${reverse ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]'}`}>
            <div className={`${animClass} flex flex-shrink-0`} style={{ animationDuration: speed }}>
                {items.map((item, index) => (
                    <span key={index} className="font-heading text-3xl md:text-5xl uppercase mx-6 flex items-center tracking-tighter">
                        {item}
                        <span className="mx-6 text-brand-red text-5xl md:text-7xl leading-none">•</span>
                    </span>
                ))}
            </div>
            <div className={`${animClass} flex flex-shrink-0`} aria-hidden="true" style={{ animationDuration: speed }}>
                {items.map((item, index) => (
                    <span key={`dup-${index}`} className="font-heading text-3xl md:text-5xl uppercase mx-6 flex items-center tracking-tighter">
                        {item}
                        <span className="mx-6 text-brand-red text-5xl md:text-7xl leading-none">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function MarqueeBanner() {
    return (
        <div className="bg-brand-black text-brand-offwhite py-4 md:py-6 border-y-4 border-brand-black overflow-hidden transform scale-105 my-8 brutal-shadow relative z-20 flex flex-col gap-2">
            <MarqueeTrack items={marqueeItems} speed="25s" />
            <MarqueeTrack items={[...marqueeItems].reverse()} reverse speed="35s" />
        </div>
    );
}
