import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './NewsPage.css';

// Assets
import gtaImg from '@shared/assets/images/newsPage/gta6.jpg';
import ps5Img from '@shared/assets/images/newsPage/ps5.jpg';
import switchImg from '@shared/assets/images/newsPage/switch2.jpeg';
import acImg from '@shared/assets/images/newsPage/ac.jpg';
import lolImg from '@shared/assets/images/newsPage/lol.jpeg';
import cyberpunkImg from '@shared/assets/images/homePage/Cyberpunk_2077.jpg';
import eldenImg from '@shared/assets/images/homePage/eldenring.png';
import bfImg from '@shared/assets/images/homePage/battlefield-6.jpg';
import logoSmall from '@shared/assets/logo/logo4epuha-white.png';

export const NewsPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const sideNews = [
        { id: 1, author: 'Nintendo News', time: '15min', title: 'Switch 2 rumors: 8-inch LCD screen and magnetic Joy-Cons?', tagColor: '#e06666', img: switchImg },
        { id: 2, author: 'E-Sports Hub', time: '1h', title: 'Faker wins 5th World Championship with T1 in London.', tagColor: '#6aa84f', img: lolImg },
        { id: 3, author: 'Ubisoft Insider', time: '2h', title: 'Assassins Creed Shadows goes gold ahead of November.', tagColor: '#3d85c6', img: acImg },
        { id: 4, author: 'CD Projekt', time: '5h', title: 'Cyberpunk 2077: Orion enters full production phase.', tagColor: '#f1c232', img: cyberpunkImg },
        { id: 5, author: 'FromSoftware', time: '10h', title: 'Elden Ring: Shadow of the Erdtree sets new DLC records.', tagColor: '#8e7cc3', img: eldenImg },
        { id: 6, author: 'EA Dice', time: '1d', title: 'Next Battlefield aims for realistic destruction engine.', tagColor: '#3d85c6', img: bfImg },
        { id: 7, author: '4epuha Studio', time: '2d', title: 'New DevHub update: AI-powered asset generator for devs.', tagColor: '#FA8305', img: logoSmall }
    ];

    useGSAP(() => {
        // Hero Section Animations
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

        tl.from('.news-breadcrumb', { opacity: 0, y: -20, delay: 0.2 })
            .from('.news-hero h1', { opacity: 0, y: 30 }, '-=0.6')
            .from('.hero-subtitle', { opacity: 0, y: 20 }, '-=0.7')
            .from('.search-container', { opacity: 0, scale: 0.95, y: 20 }, '-=0.7')
            .from('.hero-decor-dot', { opacity: 0, scale: 0, duration: 0.5 }, '-=0.5');

        // Main Column News Cards
        gsap.utils.toArray<HTMLElement>('.large-news-card').forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Side Column Items
        const sideItems = gsap.utils.toArray<HTMLElement>('.side-news-item');
        gsap.from(sideItems, {
            scrollTrigger: {
                trigger: '.news-side-column',
                start: 'top 85%',
                once: true,
            },
            opacity: 0,
            x: 50,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'all' // Ensure inline styles are cleared after animation
        });

        // Divider animations
        gsap.from('.news-card-divider', {
            scrollTrigger: {
                trigger: '.news-card-divider',
                start: 'top 90%',
            },
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 1.5,
            ease: 'power4.out',
            stagger: 0.3
        });

    }, { scope: containerRef });

    return (
        <div className="news-page" ref={containerRef}>
            <div className="wrapper">
                <section className="news-hero">
                    <div className="news-breadcrumb">
                        <Link to="/">Home</Link> &gt; <Link to="/news" className="active-breadcrumb">News</Link>
                    </div>
                    <h1>Latest updates from 4epuha & Gaming World</h1>
                    <p className="hero-subtitle">
                        Stay informed about the most significant events in the gaming industry and our studio's latest projects.
                    </p>

                    <div className="search-container">
                        <div className="search-bar-news">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" placeholder="Search news..." />
                        </div>
                    </div>

                    <div className="hero-decor-dot"></div>
                </section>

                <div className="news-content-layout">
                    {/* LEFT COLUMN */}
                    <div className="news-main-column">
                        <div className="large-news-card">
                            <img src={gtaImg} alt="GTA VI" className="large-card-img" />
                            <div className="card-info">
                                <div className="card-meta">
                                    <span className="source-tag" style={{ background: '#FA8305' }}>Rockstar Games</span>
                                    <span className="time-tag">.5min</span>
                                </div>
                                <h2>GTA VI on track for Fall 2025 release on Next-Gen Consoles</h2>
                                <p>
                                    Take-Two Interactive has confirmed during its latest earnings call that Grand Theft Auto VI is scheduled for release in the Fall of 2025. The game will initially launch on PlayStation 5 and Xbox Series X/S, promising to redefine the open-world genre with unprecedented level of detail and dynamic interactivity in Leonida.
                                </p>
                            </div>
                        </div>

                        <div className="news-card-divider"></div>

                        <div className="large-news-card">
                            <img src={ps5Img} alt="PS5 Pro" className="large-card-img" />
                            <div className="card-info">
                                <div className="card-meta">
                                    <span className="source-tag" style={{ background: '#3d85c6' }}>Sony Interactive</span>
                                    <span className="time-tag">.10min</span>
                                </div>
                                <h2>PlayStation 5 Pro officially unveiled with PSSR technology</h2>
                                <p>
                                    Sony has introduced the PlayStation 5 Pro, a mid-generation refresh designed for hardcore gamers. The console features a 67% more powerful GPU and PlayStation Spectral Super Resolution (PSSR), an AI-driven upscaling technology similar to NVIDIA DLSS. It aims to deliver high-fidelity graphics at stable 60FPS.
                                </p>
                            </div>
                        </div>

                        <div className="news-card-divider"></div>

                        <div className="bottom-text-block">
                            <h3>About 4epuha News</h3>
                            <p>Our news feed is curated by industry experts to bring you only the most relevant and impactful stories from the world of gaming and development.</p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="news-side-column">
                        {sideNews.map((news) => (
                            <Link key={news.id} to="/news" className="side-news-item">
                                <img src={news.img} alt={news.title} className="side-news-img" />
                                <div className="side-news-info">
                                    <div className="side-meta">
                                        <span className="side-tag" style={{ background: news.tagColor }}>{news.author}</span>
                                        <span className="side-time">.{news.time}</span>
                                    </div>
                                    <h4>{news.title}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
