import { useEffect, useState, useRef } from 'react';

export function useScrollProgress() {
    const [progress, setProgress] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const calculateProgress = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            // Scroll progress starts when the top of the element hits the bottom of the viewport
            // and ends when the bottom of the element hits the top of the viewport.
            const windowHeight = window.innerHeight;

            const totalScrollableArea = windowHeight + rect.height;
            // distance user has scrolled past the top of the element
            const scrollDistance = windowHeight - rect.top;

            let currentProgress = scrollDistance / totalScrollableArea;
            currentProgress = Math.min(Math.max(currentProgress, 0), 1);

            setProgress(currentProgress);
        };

        window.addEventListener('scroll', calculateProgress, { passive: true });
        window.addEventListener('resize', calculateProgress, { passive: true });
        // Initial setup
        calculateProgress();

        return () => {
            window.removeEventListener('scroll', calculateProgress);
            window.removeEventListener('resize', calculateProgress);
        };
    }, []);

    return [ref, progress];
}
