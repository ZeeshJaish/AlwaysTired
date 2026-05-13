import Graphic from "./graphics/GraphicElements";

export default function Footer() {
    return (
        <footer className="w-full bg-brand-purple text-brand-offwhite pt-32 pb-8 px-8 border-t-8 border-brand-black overflow-hidden relative z-[50] grain-overlay">
            <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay opacity-20"></div>

            <Graphic type="circle-outline" className="w-[100vw] h-[100vw] bottom-[-50vw] right-[-50vw] text-brand-black opacity-10" />

            <div className="w-full text-center relative z-10 mb-24">
                <h2 className="font-heading text-[clamp(5rem,25vw,30rem)] lowercase tracking-tighter m-0 leading-[0.7] text-brand-mint text-stroke-black [text-shadow:_8px_8px_0_rgb(0_0_0_/_100%)] transform -rotate-2 break-all hover:scale-105 transition-transform duration-300">
                    Always<br />Tired
                </h2>
            </div>

            <div className="max-w-[100vw] mx-auto flex flex-col md:flex-row justify-between items-end gap-16 mb-8 relative z-20 px-4 md:px-16 w-full">

                <div className="flex flex-col items-center md:items-start max-w-2xl bg-brand-black p-8 brutal-border brutal-shadow transform rotate-1 hover:-rotate-1 transition-transform">
                    <p className="font-heading uppercase text-2xl md:text-4xl tracking-widest text-brand-red">
                        Sleep Can't Be Bottled.
                    </p>
                    <p className="font-body text-xl font-bold mt-4">
                        But energy? <span className="hand-underline text-brand-mint">We handled that.</span> ⚡
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    <a href="https://instagram.com/alwaystired" target="_blank" rel="noopener noreferrer" className="bg-brand-mint text-brand-black w-24 h-24 flex items-center justify-center brutal-border brutal-shadow hover:bg-brand-red hover:text-brand-offwhite transition-none group transform hover:rotate-6 hover:scale-110">
                        <span className="font-heading text-4xl">IG</span>
                    </a>
                    <a href="#" className="bg-brand-mint text-brand-black w-24 h-24 flex items-center justify-center brutal-border brutal-shadow hover:bg-brand-red hover:text-brand-offwhite transition-none group transform hover:-rotate-6 hover:scale-110">
                        <span className="font-heading text-4xl">TT</span>
                    </a>
                    <a href="#" className="bg-brand-black text-brand-offwhite w-24 h-24 flex items-center justify-center brutal-border brutal-shadow hover:bg-brand-red hover:text-brand-black transition-none group transform hover:rotate-12 hover:scale-110">
                        <span className="font-heading text-4xl">X</span>
                    </a>
                </div>
            </div>

            <div className="w-full border-t-8 border-brand-black pt-8 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center text-xl font-body font-black uppercase relative z-20">
                <p>© 2026 Always Tired. All rights reserved.</p>
                <div className="flex gap-8 mt-8 md:mt-0">
                    <a href="#" className="hover:text-brand-red transition-none hover:bg-brand-black hover:text-brand-offwhite px-4 py-2 brutal-border">Terms</a>
                    <a href="#" className="hover:text-brand-red transition-none hover:bg-brand-black hover:text-brand-offwhite px-4 py-2 brutal-border">Privacy</a>
                </div>
            </div>
        </footer>
    );
}
