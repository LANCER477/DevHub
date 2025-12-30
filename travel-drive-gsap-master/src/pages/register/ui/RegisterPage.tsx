import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const RegisterPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from("h1", { opacity: 0, y: 30, duration: 1, ease: "power3.out", delay: 0.2 });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="register-page" style={{ padding: '160px 0 100px', textAlign: 'center' }}>
            <div className="wrapper">
                <h1>Register Page</h1>
                <p style={{ marginTop: '20px', color: '#888' }}>This feature is coming soon.</p>
            </div>
        </div>
    );
};