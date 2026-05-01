export default function Graphic({ type, className = "", style = {} }) {
    const renderGraphic = () => {
        switch (type) {
            case "sticker-vegan":
                return (
                    <div className="bg-[#f5f5f0] border-4 border-black px-4 py-2 font-heading uppercase text-xl transform rotate-6 brutal-shadow text-black">
                        Vegan ✓
                    </div>
                );
            case "sticker-energy":
                return (
                    <div className="bg-brand-mint border-4 border-black rounded-full w-32 h-32 flex items-center justify-center font-heading uppercase text-2xl transform -rotate-12 brutal-shadow text-black text-center leading-none">
                        Real<br />Energy
                    </div>
                );
            case "bubble":
                return (
                    <div className="rounded-full border-4 border-white opacity-30 w-full h-full"></div>
                );
            case "circle-outline":
                return (
                    <div className="rounded-full border-8 border-black opacity-10 w-full h-full"></div>
                );
            case "logo-mark":
                return (
                    <div className="font-heading opacity-5 text-[20vw] leading-none text-black absolute pointer-events-none whitespace-nowrap">
                        ALWAYS TIRED
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`absolute pointer-events-none z-0 ${className}`} style={style}>
            {renderGraphic()}
        </div>
    );
}
