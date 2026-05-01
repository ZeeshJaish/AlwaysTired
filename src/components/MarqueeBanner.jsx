export default function MarqueeBanner({
    items = [
        "UNBOTTLE THE TRUTH",
        "LOW SUGAR",
        "NO ARTIFICIAL COLORS",
        "7g PREBIOTIC FIBER",
        "ALWAYS TIRED",
        "SIP THIS NOT THAT",
        "UNBOTTLE THE TRUTH",
        "LOW SUGAR",
        "NO ARTIFICIAL COLORS",
        "7g PREBIOTIC FIBER",
        "ALWAYS TIRED",
        "SIP THIS NOT THAT"
    ]
}) {
    return (
        <div className="bg-brand-black text-brand-offwhite py-8 border-y-4 border-brand-black overflow-hidden flex whitespace-nowrap transform -rotate-1 scale-105 my-8 brutal-shadow relative z-20">
            <div className="animate-marquee flex flex-shrink-0" style={{ animationDuration: '15s' }}>
                {items.map((item, index) => (
                    <span key={index} className="font-heading text-4xl md:text-6xl uppercase mx-8 flex items-center tracking-tighter">
                        {item}
                        <span className="mx-8 text-brand-red text-6xl md:text-8xl leading-none">•</span>
                    </span>
                ))}
            </div>
            <div className="animate-marquee flex flex-shrink-0" aria-hidden="true" style={{ animationDuration: '15s' }}>
                {items.map((item, index) => (
                    <span key={`dup-${index}`} className="font-heading text-4xl md:text-6xl uppercase mx-8 flex items-center tracking-tighter">
                        {item}
                        <span className="mx-8 text-brand-red text-6xl md:text-8xl leading-none">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
