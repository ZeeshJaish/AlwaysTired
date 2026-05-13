import { useEffect, useRef, useState } from "react";

export function useScrollReveal({ threshold = 0.1, rootMargin = '0px', retrigger = false } = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (!retrigger) observer.unobserve(entry.target);
            } else if (retrigger) {
                setIsVisible(false);
            }
        }, { threshold, rootMargin });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin, retrigger]);

    return [ref, isVisible];
}
