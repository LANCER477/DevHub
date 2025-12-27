import "./HomePage.css";
import heroImage from "@shared/assets/images/homePage/gamepad_hero.png";
import logoUnity from "@shared/assets/logo/unity.svg";
import logoCry from "@shared/assets/logo/cryengine.svg";
import logoUnreal from "@shared/assets/logo/unreal.svg";
import forHonorImage from "@shared/assets/images/homePage/forhonor.png";
import forHonorVideo from "@shared/assets/videos/forhonor.mp4";
import battlefieldImage from "@shared/assets/images/homePage/battlefield-6.jpg";
import battlefieldVideo from "@shared/assets/videos/Battlefield.mp4";
import eldenRingImage from "@shared/assets/images/homePage/eldenring.png";
import eldenRingVideo from "@shared/assets/videos/eldenring.mp4";
import cyberpunkImage from "@shared/assets/images/homePage/Cyberpunk_2077.jpg";
import cyberpunkVideo from "@shared/assets/videos/cyberpunk.mp4";
import ubisoftLogo from "@shared/assets/images/homePage/ubisoft.jpg";
import crytekLogo from "@shared/assets/images/homePage/crytek.jpg";
import epicGamesLogo from "@shared/assets/images/homePage/epicgames.png";
import creativeAssemblyLogo from "@shared/assets/images/homePage/creativeassembly.png";
import embarkLogo from "@shared/assets/images/homePage/embark.png";
import warhorseLogo from "@shared/assets/images/homePage/warhorse.png";
import gameVideo from "@shared/assets/videos/game.mp4";

// Любимые игры студентов
const FAVORITE_GAMES = [
    { id: 1, title: "For Honor", stats: "3.2K Fans", image: forHonorImage, video: forHonorVideo },
    { id: 2, title: "Battlefield 6", stats: "2.8K Fans", image: battlefieldImage, video: battlefieldVideo },
    { id: 3, title: "Elden Ring", stats: "4.1K Fans", image: eldenRingImage, video: eldenRingVideo },
    { id: 4, title: "Cyberpunk 2077", stats: "2.5K Fans", image: cyberpunkImage, video: cyberpunkVideo },
];

export const HomePage = () => {
    return (
        <div className="home">
            {/* HERO SECTION */}
            <section className="hero wrapper">
                <div className="hero-content">
                    <span className="subtitle">3D game Dev</span>
                    <h1 className="hero-title">
                        Work that we <br />
                        produce for our <br />
                        clients
                    </h1>
                    <p className="hero-description">
                        We are a passionate team of developers dedicated to creating immersive 3D experiences. From concept to launch, we bring your gaming visions to life.
                    </p>
                    <button className="btn-primary">Get more details</button>
                </div>

                <div className="hero-image-container">
                    <img src={heroImage} alt="Joystick Controller" className="hero-main-img" />

                    {/* Floating Logos */}
                    <div className="floating-logo unity">
                        <img src={logoUnity} alt="Unity" className="logo-img" />
                    </div>

                    <div className="floating-logo cryengine">
                        <img src={logoCry} alt="CryEngine" className="logo-img" />
                    </div>

                    <div className="floating-logo unreal">
                        <img src={logoUnreal} alt="Unreal Engine" className="logo-img" />
                    </div>
                </div>
            </section>

            {/* STUDENTS' FAVORITE GAMES SECTION */}
            <section className="trending wrapper">
                <div className="section-header">
                    <h2>Students' Favorite Games</h2>
                    <button className="btn-secondary">SEE ALL</button>
                </div>
                <div className="trending-grid">
                    {FAVORITE_GAMES.map((game) => (
                        <div
                            key={game.id}
                            className="game-card"
                            onMouseEnter={(e) => {
                                const video = e.currentTarget.querySelector('.card-video') as HTMLVideoElement;
                                if (video) video.play();
                            }}
                            onMouseLeave={(e) => {
                                const video = e.currentTarget.querySelector('.card-video') as HTMLVideoElement;
                                if (video) {
                                    video.pause();
                                    video.currentTime = 0;
                                }
                            }}
                        >
                            <div className="card-image">
                                <img src={game.image} alt={game.title} className="card-img" />
                                {game.video && (
                                    <video
                                        className="card-video"
                                        src={game.video}
                                        loop
                                        muted
                                        playsInline
                                    />
                                )}
                            </div>
                            <div className="card-info">
                                <span className="game-title">{game.title}</span>
                                <span className="game-stats">❤️ {game.stats}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ABOUT / LOREM IPSUM SECTION */}
            <section
                className="about wrapper"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
            >
                <div className="about-text-center">
                    <h3>Building Virtual Worlds</h3>
                    <p>
                        Our mission is to push the boundaries of interactive entertainment. We combine cutting-edge technology with creative storytelling to deliver unforgettable gaming experiences.
                    </p>
                </div>
                <div className="about-city-image">
                    <video
                        className="about-video"
                        src="/src/shared/assets/videos/rdr2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>

            </section>

            {/* FEATURES SECTION */}
            <section
                className="features-section"
            >
                <video
                    className="features-bg-video"
                    src={gameVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="wrapper">
                    <div
                        className="features-intro"
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                    >
                        <h3>Expertise in Every Dimension</h3>
                        <p>
                            From mobile hits to AAA console titles, our diverse team covers every aspect of modern game development.
                        </p>
                    </div>

                    <div className="features-grid-container">
                        <div className="features-row">
                            {/* Mobile Game Dev */}
                            <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                                <div className="feature-icon-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                </div>
                                <span>Mobile Game Development</span>
                                <span className="arrow">→</span>
                            </div>
                            {/* PC Game Dev */}
                            <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                                <div className="feature-icon-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                </div>
                                <span>PC Game Development</span>
                                <span className="arrow">→</span>
                            </div>
                            {/* PS4 Game Dev */}
                            <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
                                <div className="feature-icon-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><line x1="6" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="18" y2="12"></line></svg>
                                </div>
                                <span>PS4 Game Development</span>
                                <span className="arrow">→</span>
                            </div>
                            {/* AR/VR Solutions */}
                            <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
                                <div className="feature-icon-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 1.75a.25.25 0 0 0-.48 0L3.41 21.84a2 2 0 0 0 1.93 1.46H18c1.1 0 2-.9 2-2V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v19h20Z"></path></svg>
                                    {/* Simplified VR icon placeholder */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'none' }}><circle cx="12" cy="12" r="10"></circle></svg>
                                    {/* Использую очки */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V10"></path><path d="M3 10L9 12L12 10L15 12L21 10"></path></svg>
                                </div>
                                <span>AR/VR Solutions</span>
                                <span className="arrow">→</span>
                            </div>
                        </div>

                        <div className="features-row-center">
                            {/* AR/VR Design */}
                            <div className="feature-item" data-aos="fade-up" data-aos-delay="500">
                                <div className="feature-icon-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0"></path></svg>
                                </div>
                                <span>AR/ VR Design</span>
                                <span className="arrow">→</span>
                            </div>
                            {/* 3D Modeling */}
                            <div className="feature-item" data-aos="fade-up" data-aos-delay="600">
                                <div className="feature-icon-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                </div>
                                <span>3D Modeling</span>
                                <span className="arrow">→</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPANIES SECTION - Where Our Students Work */}
            <section className="projects wrapper">
                <div className="section-header-center">
                    <h2>Where Our Students Work</h2>
                    <p className="section-subtitle">
                        Our graduates are employed at leading game development studios worldwide.
                    </p>
                </div>

                <div className="projects-grid">
                    {/* Row 1 */}
                    <div className="project-item company-logo">
                        <img src={ubisoftLogo} alt="Ubisoft" />
                    </div>
                    <div className="project-item company-logo">
                        <img src={crytekLogo} alt="Crytek" />
                    </div>
                    <div className="project-item company-logo">
                        <img src={epicGamesLogo} alt="Epic Games" />
                    </div>
                    {/* Row 2 */}
                    <div className="project-item company-logo">
                        <img src={creativeAssemblyLogo} alt="Creative Assembly" />
                    </div>
                    <div className="project-item company-logo">
                        <img src={embarkLogo} alt="Embark Studios" />
                    </div>
                    <div className="project-item company-logo">
                        <img src={warhorseLogo} alt="Warhorse Studios" />
                    </div>
                </div>

                <div className="projects-action">
                    <button className="btn-see-all">VIEW ALL PARTNERS</button>
                </div>
            </section>

        </div>
    );
};
