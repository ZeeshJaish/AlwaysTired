import { useEffect, useRef, useState } from "react";

export function useScrollReveal(options = { threshold: 0.1, rootMargin: '0px', retrigger: false }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // We ensure we have valid properties extracted to avoid stale closures
        const { threshold, rootMargin, retrigger } = options;

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
    }, [options.threshold, options.rootMargin, options.retrigger]);

    return [ref, isVisible];
}
