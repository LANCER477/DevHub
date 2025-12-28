import mehImg from "@shared/assets/images/servicesPage/meh.jpg";
import modelImg from "@shared/assets/images/servicesPage/model.png";
import levelImg from "@shared/assets/images/servicesPage/level.jpg";
import "./ServicesPage.css";
import videoNinja from "@shared/assets/videos/wh.mp4";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ServicesPage = () => {
    const testimonials = [
        {
            name: "Viezh Robert",
            location: "Warsaw, Poland",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            text: "Incredible attention to detail. The team at 4epuha delivered our assets ahead of schedule and the quality was unmatched."
        },
        {
            name: "Yessica Christy",
            location: "Beijing, China",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            text: "Professional, creative, and technically skilled. They solved complex optimization issues we couldn't crack for months."
        },
        {
            name: "Kim Young Jou",
            location: "Seoul, South Korea",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
            text: "A true partner in development. Their input on game design tailored our project to be a massive success."
        },
        {
            name: "Anna Schmidt",
            location: "Berlin, Germany",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
            text: "Outstanding work ethic and creativity. They transformed our vision into reality with precision and passion."
        },
        {
            name: "Carlos Rivera",
            location: "Madrid, Spain",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
            text: "Best decision we made for our project. The results exceeded all expectations and the process was seamless."
        },
        {
            name: "Sophie Chen",
            location: "Singapore",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg",
            text: "Exceptional talent and professionalism. They brought innovative solutions to every challenge we faced."
        }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const testimonialsPerPage = 3;
    const maxIndex = Math.max(0, testimonials.length - testimonialsPerPage);
    const totalPages = maxIndex + 1;

    const handlePrevTestimonial = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentTestimonial(prev => Math.max(0, prev - 1));
            setIsTransitioning(false);
        }, 200);
    };

    const handleNextTestimonial = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentTestimonial(prev => Math.min(maxIndex, prev + 1));
            setIsTransitioning(false);
        }, 200);
    };

    const handleDotClick = (pageIndex: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentTestimonial(pageIndex);
            setIsTransitioning(false);
        }, 200);
    };

    const visibleTestimonials = testimonials.slice(currentTestimonial, currentTestimonial + testimonialsPerPage);
    const currentPage = currentTestimonial;
    return (
        <div className="services-page">
            <div className="wrapper">

                {/* HERO & STATS */}
                <section className="services-hero" data-aos="fade-down">
                    <div className="services-hero-content">
                        <div className="services-breadcrumb">
                            <Link to="/">Home</Link> &gt; <Link to="/services" className="active-breadcrumb">Services</Link>
                        </div>
                        <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
                        <p className="hero-subtitle">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    <div className="stats-box-wrapper">
                        <div className="stats-container">
                            <div className="stat-card">
                                <div className="stat-icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                                <div className="stat-info">
                                    <span className="stat-number">90+</span>
                                    <span className="stat-label">Clients</span>
                                </div>
                            </div>

                            <div className="stat-divider"></div>

                            <div className="stat-card">
                                <div className="stat-icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                <div className="stat-info">
                                    <span className="stat-number">30+</span>
                                    <span className="stat-label">Countries</span>
                                </div>
                            </div>

                            <div className="stat-divider"></div>

                            <div className="stat-card">
                                <div className="stat-icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0-9H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                    </svg>
                                </div>
                                <div className="stat-info">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VIDEO FEATURE */}
                <section className="video-feature" data-aos="fade-up">
                    <div className="video-feature-media">
                        <video src={videoNinja} autoPlay muted loop playsInline />
                    </div>
                    <div className="video-feature-content">
                        <h2>Immersive Cinematic Cutscenes</h2>
                        <p>
                            We specialize in creating breathtaking cinematic experiences that drive the narrative forward.
                            Our team uses state-of-the-art motion capture and rendering techniques.
                        </p>
                        <div className="check-list">
                            <div className="check-item"><span className="check-icon">✓</span> 4K Rendering</div>
                            <div className="check-item"><span className="check-icon">✓</span> Motion Caption Integration</div>
                            <div className="check-item"><span className="check-icon">✓</span> Real-time VFX</div>
                            <div className="check-item"><span className="check-icon">✓</span> Professional Voice Acting</div>
                        </div>
                    </div>
                </section>

                {/* ALTERNATING BLOCKS 1 */}
                <section className="content-block" data-aos="fade-right">
                    <div className="block-text">
                        <h2>Level Design & Environment Art</h2>
                        <p>
                            Creating worlds that breathe. Our environment artists build detailed, optimized, and atmospheric levels that tell a story without words. From cyberpunk cities to fantasy forests, we handle it all.
                        </p>
                        <button className="block-btn">Read more</button>
                    </div>
                    <div className="block-media">
                        <img src={levelImg} alt="Environment Art" />

                    </div>
                </section>

                {/* ALTERNATING BLOCKS 2 */}
                <section className="content-block reverse" data-aos="fade-left">
                    <div className="block-text">
                        <h2>Character Modeling & Animation</h2>
                        <p>
                            Heroes, villains, and NPCs that feel alive. We deliver high-fidelity character models with expressive animations, fully rigged and ready for any engine.
                        </p>
                        <button className="block-btn">Read more</button>
                    </div>
                    <div className="block-media">
                        <img src={modelImg} alt="Character Art" />
                    </div>
                </section>

                {/* ALTERNATING BLOCKS 3 */}
                <section className="content-block" data-aos="fade-right">
                    <div className="block-text">
                        <h2>Game Mechanics & Programming</h2>
                        <p>
                            Solid code is the backbone of any great game. Our engineers are experts in C++, C#, and Blueprint, ensuring smooth performance and bug-free gameplay mechanics.
                        </p>
                        <button className="block-btn">Read more</button>
                    </div>
                    <div className="block-media">
                        <img src={mehImg} alt="Programming" />
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="testimonials" data-aos="fade-up">
                    <h2>Trusted by Thousands of Happy Customers</h2>
                    <p>See what the industry says about us.</p>
                    <div className="testimonials-carousel">
                        <div className="testimonials-grid">
                            {visibleTestimonials.map((testimonial, index) => (
                                <div key={currentTestimonial + index} className="testimonial-card">
                                    <div className="testimonial-header">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                                        <div>
                                            <h4>{testimonial.name}</h4>
                                            <span style={{ color: '#FA8305' }}>{testimonial.location}</span>
                                        </div>
                                    </div>
                                    <p>"{testimonial.text}"</p>
                                </div>
                            ))}
                        </div>
                        <div className="testimonials-nav">
                            <button
                                className="testimonial-arrow"
                                onClick={handlePrevTestimonial}
                                disabled={currentTestimonial === 0}
                            >
                                ←
                            </button>
                            <div className="pagination-dots">
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <div
                                        key={index}
                                        className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
                                        onClick={() => handleDotClick(index)}
                                    />
                                ))}
                            </div>
                            <button
                                className="testimonial-arrow"
                                onClick={handleNextTestimonial}
                                disabled={currentTestimonial >= maxIndex}
                            >
                                →
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};
