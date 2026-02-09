import {useEffect, useRef} from 'react';

function GlitterBackground({count = 500}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const glitters = [];

        for (let i = 0; i < count; i++) {
            const glitter = document.createElement('div');
            glitter.className = 'glitter';
            glitter.style.left = `${Math.random() * 100}%`;
            glitter.style.top = `${Math.random() * 100}%`;
            glitter.style.width = `${Math.random() * 2 + 2}px`; // smaller size
            glitter.style.height = glitter.style.width;
            glitter.style.opacity = `${Math.random() * 0.3 + 0.1}`; // very subtle
            glitter.style.animationDuration = `${Math.random() * 3 + 1.5}s`; // random speed
            glitter.style.backgroundColor = '#d2b48c'; // soft gold
            container.appendChild(glitter);
            glitters.push(glitter);
        }

        return () => glitters.forEach(g => g.remove());
    }, [count]);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
            <style>{`
                .glitter {
                    position: absolute;
                    border-radius: 50%;
                    animation: fall linear infinite;
                }

                @keyframes fall {
                    0% {
                        transform: translateY(-10px);
                    }
                    100% {
                        transform: translateY(110vh);
                    }
                }
            `}</style>
        </div>
    );
}

export default GlitterBackground;
