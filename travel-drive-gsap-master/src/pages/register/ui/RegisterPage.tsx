import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const RegisterPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from("h1", { opacity: 0, y: 30, duration: 1, ease: "power3.out", delay: 0.2 });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ padding: '100px 0', textAlign: 'center' }}>
            <h1>Register Page</h1>
        </div>
    );
};