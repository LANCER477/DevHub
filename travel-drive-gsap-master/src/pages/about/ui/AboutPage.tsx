import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./AboutPage.css";
import imageIlya from "@shared/assets/images/aboutPage/ilya.jpeg";
import imageIvan from "@shared/assets/images/aboutPage/ivan.jpeg";
import imageMax from "@shared/assets/images/aboutPage/max.jpeg";
import imageYarik from "@shared/assets/images/aboutPage/yarik.jpeg";
import videoAvatar from "@shared/assets/videos/avatar.mp4";
import videoRdr2 from "@shared/assets/videos/sifu.mp4";
import videoDevs from "@shared/assets/videos/devs.mp4";

export const AboutPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videos = [videoAvatar, videoRdr2];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextIndex = (currentIndex + 1) % videos.length;

    useGSAP(() => {
        // Hero Section
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
        tl.from(".about-breadcrumb", { opacity: 0, y: -20, delay: 0.2 })
            .from(".about-hero-content h1", { opacity: 0, y: 30 }, "-=0.7")
            .from(".about-hero-content p", { opacity: 0, y: 20 }, "-=0.7")
            .from(".about-hero-btn", { opacity: 0, scale: 0.9, y: 10 }, "-=0.7")
            .from(".about-hero-right", { opacity: 0, x: 50 }, "-=1");

        // Section Animations
        const animateOnScroll = (trigger: string, items: string, x = 0) => {
            gsap.from(items, {
                scrollTrigger: {
                    trigger: trigger,
                    start: "top 85%",
                },
                opacity: 0,
                y: 30,
                x: x,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            });
        };

        animateOnScroll(".why-us", ".why-us-header h2, .why-card");
        animateOnScroll(".info-section", ".info-image, .info-content > *", -30);
        animateOnScroll(".team-section", ".team-section h2, .team-card");

    }, { scope: containerRef });

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(nextIndex);
            setIsAnimating(false);
        }, 600);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((currentIndex - 1 + videos.length) % videos.length);
            setIsAnimating(false);
        }, 600);
    };

    return (
        <div className="about-page" ref={containerRef}>
            <div className="wrapper">
                {/* HERO SECTION */}
                <section className="about-hero">
                    <div className="about-hero-content">
                        <div className="about-breadcrumb">
                            <Link to="/">Home</Link> &gt; <Link to="/about" className="active-breadcrumb">About us</Link>
                        </div>
                        <h1>Crafting Worlds Beyond Imagination</h1>
                        <p>
                            We are a collective of visionary developers, artists, and storytellers. At 4epuha, we don't just build games; we forge immersive experiences that challenge the boundaries of interactive entertainment and redefine what's possible in the digital realm.
                        </p>
                        <button className="about-hero-btn">Get in touch →</button>
                    </div>
                    <div className="about-hero-right">
                        <div className="video-slider-container">
                            {videos.map((src, index) => {
                                let className = "slider-video";
                                if (index === currentIndex && !isAnimating) className += " active";
                                if (index === nextIndex && !isAnimating) className += " next-bg";
                                if (isAnimating && index === currentIndex) className += " slide-out";
                                if (isAnimating && index === nextIndex) className += " slide-in";

                                return (
                                    <video
                                        key={index}
                                        src={src}
                                        className={className}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                );
                            })}
                        </div>

                        <div className="slider-nav">
                            <div className="nav-arrow" onClick={handlePrev}>←</div>
                            <div className="nav-arrow" onClick={handleNext}>→</div>
                        </div>
                    </div>
                </section>

                {/* WHY WORK WITH US */}
                <section className="why-us">
                    <div className="why-us-header">
                        <h2>Why work with us</h2>
                    </div>
                    <div className="why-cards">
                        <div className="why-card">
                            <span className="why-tag innovation">Innovation</span>
                            <h3>Cutting-Edge Tech</h3>
                            <p>
                                We push the limits of modern engines like Unreal 5 and Unity to deliver hyper-realistic visuals and seamless mechanics that set new industry standards.
                            </p>
                        </div>
                        <div className="why-card">
                            <span className="why-tag community">Player-Centric</span>
                            <h3>Community Driven</h3>
                            <p>
                                We build with our players, not just for them. Community feedback is at the heart of our development process, ensuring we deliver experiences you actually want to play.
                            </p>
                        </div>
                        <div className="why-card">
                            <span className="why-tag passion">Passion</span>
                            <h3>Creative Freedom</h3>
                            <p>
                                We are powered by passion. Our diverse team of creators is encouraged to experiment, take risks, and bring their most ambitious ideas to life without compromise.
                            </p>
                        </div>
                    </div>
                </section>


                {/* INFO SECTION */}
                <section className="info-section">
                    <div className="info-image">
                        <video
                            src={videoDevs}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="info-video"
                        />
                    </div>
                    <div className="info-content">
                        <span className="info-tag">History</span>
                        <h2>From Indie Roots to Industry Leaders</h2>
                        <p>
                            Founded with a singular vision to create games that resonate, 4epuha started as a small team of enthusiasts in a garage. Today, we stand as a powerhouse of creativity, united by our love for gaming and our drive to leave a lasting impact on the industry. Every line of code, every pixel, and every story beat is crafted with dedication.
                        </p>
                    </div>
                </section>

                {/* OUR TEAM */}
                <section className="team-section">
                    <h2>Our Team</h2>
                    <div className="team-grid">
                        <a href="https://github.com/Cennge" target="_blank" rel="noopener noreferrer" className="team-card">
                            <img src={imageIlya} alt="Ilya" className="team-avatar" />
                            <div className="team-name">Ilya</div>
                            <div className="team-role">CEO</div>
                        </a>
                        <a href="https://github.com/vanyabombom" target="_blank" rel="noopener noreferrer" className="team-card">
                            <img src={imageIvan} alt="Ivan" className="team-avatar" />
                            <div className="team-name">Ivan</div>
                            <div className="team-role">CTO</div>
                        </a>
                        <a href="https://github.com/LANCER477" target="_blank" rel="noopener noreferrer" className="team-card">
                            <img src={imageMax} alt="Max" className="team-avatar" />
                            <div className="team-name">Max</div>
                            <div className="team-role">Lead Designer</div>
                        </a>
                        <a href="https://github.com/ArbiOpium" target="_blank" rel="noopener noreferrer" className="team-card">
                            <img src={imageYarik} alt="Yarik" className="team-avatar" />
                            <div className="team-name">Yarik</div>
                            <div className="team-role">Developer</div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};
