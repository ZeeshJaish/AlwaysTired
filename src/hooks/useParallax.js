import { useEffect, useRef, useState } from "react";

export function useParallax(speed = 0.5) {
    const ref = useRef(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { top } = ref.current.getBoundingClientRect();
                // Calculate offset based on distance from center of screen
                const windowHeight = window.innerHeight;
                const distFromCenter = (top - windowHeight / 2);
                setOffsetY(distFromCenter * speed);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial call
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed]);

    return [ref, offsetY];
}
