import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './StorePage.css';

export const StorePage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
        tl.from(".store-breadcrumb", { opacity: 0, y: -20, delay: 0.2 })
            .from(".store-hero h1", { opacity: 0, y: 30 }, "-=0.7")
            .from(".store-hero p", { opacity: 0, y: 20 }, "-=0.7");
    }, { scope: containerRef });

    return (
        <div className="store-page" ref={containerRef}>
            <div className="wrapper">
                <section className="store-hero">
                    <div className="store-breadcrumb">
                        <Link to="/">Home</Link> &gt; <Link to="/store" className="active-breadcrumb">Store</Link>
                    </div>
                    <h1>Store</h1>
                    <p>Coming soon...</p>
                </section>
            </div>
        </div>
    );
};
