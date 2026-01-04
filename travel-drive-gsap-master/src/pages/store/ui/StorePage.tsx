import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useCart } from '@app/providers/CartContext';
import type { Product } from '@app/providers/CartContext';
import './StorePage.css';

// Import 4epuha merch images

import heroVideo from '@shared/assets/videos/4epumovie.mp4';

gsap.registerPlugin(ScrollToPlugin);

import { PRODUCTS, CATEGORIES } from '@shared/data/products';

const BENEFITS = [
    { title: 'Fast Delivery', desc: 'Secure shipping worldwide in 3-5 days.', icon: '🚀' },
    { title: 'Premium Quality', desc: 'Only the best materials for our gear.', icon: '💎' },
    { title: '24/7 Support', desc: 'Our team is always here to help you.', icon: '🎧' },
];

const NEW_ARRIVALS = PRODUCTS.slice(-4).reverse(); // Just take last 4 as new arrivals for demo

export const StorePage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const { addToCart } = useCart();

    const filteredProducts = activeCategory === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    const handleCategorySelect = (category: string) => {
        setActiveCategory(category);
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: "#shop-grid", offsetY: 150 },
            ease: "power3.inOut"
        });
    };

    const handleAddToCart = (product: Product, e: React.MouseEvent) => {
        addToCart(product);

        // Fly animation
        const btn = e.currentTarget as HTMLElement;
        const img = btn.closest('.product-card')?.querySelector('img');
        const cart = document.querySelector('#header-cart');

        if (img && cart) {
            const rect = img.getBoundingClientRect();
            const cartRect = cart.getBoundingClientRect();

            const clone = img.cloneNode() as HTMLImageElement;
            clone.style.position = 'fixed';
            clone.style.top = `${rect.top}px`;
            clone.style.left = `${rect.left}px`;
            clone.style.width = `${rect.width}px`;
            clone.style.height = `${rect.height}px`;
            clone.style.zIndex = '1000';
            clone.style.borderRadius = '50%';
            clone.style.pointerEvents = 'none';

            document.body.appendChild(clone);

            gsap.to(clone, {
                top: cartRect.top,
                left: cartRect.left,
                width: 30,
                height: 30,
                opacity: 0.5,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    document.body.removeChild(clone);
                    gsap.fromTo(cart, { scale: 1 }, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 });
                }
            });
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

        tl.from(".store-breadcrumb", { opacity: 0, y: -20, delay: 0.2 })
            .from(".store-hero-content h1", { opacity: 0, y: 30 }, "-=0.7")
            .from(".store-hero-content p", { opacity: 0, y: 20 }, "-=0.7")
            .from(".store-hero-content p", { opacity: 0, y: 20 }, "-=0.7");

        // Fixed Category Animation
        gsap.fromTo(".category-card",
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: ".store-categories",
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out",
                clearProps: "opacity,y,transform"
            }
        );

        gsap.from(".new-arrival-card", {
            scrollTrigger: {
                trigger: ".new-arrivals-grid",
                start: "top 85%",
            },
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out"
        });

        gsap.from(".benefit-item", {
            scrollTrigger: {
                trigger: ".store-benefits",
                start: "top 90%",
            },
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    // Animate products when activeCategory changes - FIXED SELECTOR
    useGSAP(() => {
        if (filteredProducts.length > 0) {
            gsap.fromTo("#shop-grid .product-card",
                { opacity: 0, scale: 0.9, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: "power2.out",
                    clearProps: "all"
                }
            );
        }
    }, { dependencies: [activeCategory], scope: containerRef });

    return (
        <div className="store-page" ref={containerRef}>
            {/* HERO SECTION */}
            <section className="store-hero">
                <div className="hero-video-container">
                    <video
                        src={heroVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="hero-video-bg"
                    />
                    <div className="hero-video-overlay"></div>
                </div>
                <div className="wrapper">
                    <div className="store-breadcrumb">
                        <Link to="/">Home</Link> &gt; <Link to="/store" className="active-breadcrumb">Store</Link>
                    </div>
                    <div className="store-hero-content">
                        <h1>Elite Gaming Gear</h1>
                        <p>Experience the next level of gaming with our curated selection of professional hardware and exclusive merchandise.</p>
                    </div>
                </div>
            </section>

            {/* NEW ARRIVALS - NOW ABOVE CATEGORIES */}
            <section className="new-arrivals wrapper">
                <div className="section-header">
                    <h2>🔥 Just Dropped</h2>
                    <p className="section-subtitle">The latest additions to our elite collection.</p>
                </div>
                <div className="new-arrivals-grid">
                    {NEW_ARRIVALS.map(product => (
                        <Link to={`/store/product/${product.id}`} key={product.id} className="product-card new-arrival-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <div className="product-overlay">
                                    {product.category !== 'Apparel' && (
                                        <button
                                            className="btn-secondary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleAddToCart(product as Product, e);
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                                <span className="new-badge">NEW</span>
                            </div>
                            <div className="product-info">
                                <span className="p-category">{product.category}</span>
                                <h4 className="p-name">{product.name}</h4>
                                <span className="p-price">{product.price}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CATEGORIES SECTION */}
            <section className="store-categories wrapper">
                <div className="section-title">
                    <h2>Shop by Category</h2>
                </div>
                <div className="categories-grid">
                    {CATEGORIES.map(cat => (
                        <div
                            key={cat.id}
                            className={`category-card ${activeCategory === cat.title ? 'active' : ''}`}
                            onClick={() => handleCategorySelect(cat.title)}
                        >
                            <div className="cat-icon">{cat.image}</div>
                            <div className="cat-info">
                                <h3>{cat.title}</h3>
                                <p>{cat.description}</p>
                                <button className="btn-text">Explore &rarr;</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MAIN SHOP SECTION */}
            <section className="featured-products wrapper" id="shop-section">
                <div className="section-header shop-header">
                    <div className="shop-title-group">
                        <h2>{activeCategory === 'All' ? 'All Products' : activeCategory}</h2>
                        <p>Showing {filteredProducts.length} items</p>
                    </div>
                </div>
                <div className="product-grid" id="shop-grid">
                    {filteredProducts.map(product => (
                        <Link to={`/store/product/${product.id}`} key={product.id} className="product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <div className="product-overlay">
                                    {product.category !== 'Apparel' && (
                                        <button
                                            className="btn-secondary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleAddToCart(product, e);
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="product-info">
                                <span className="p-category">{product.category}</span>
                                <h4 className="p-name">{product.name}</h4>
                                <span className="p-price">{product.price}</span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="store-action">
                    <button className="btn-outline" onClick={() => setActiveCategory('All')}>RESET FILTERS</button>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="store-benefits">
                <div className="wrapper">
                    <div className="benefits-grid">
                        {BENEFITS.map((benefit, i) => (
                            <div key={i} className="benefit-item">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <div className="benefit-text">
                                    <h4>{benefit.title}</h4>
                                    <p>{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="store-newsletter wrapper">
                <div className="newsletter-card">
                    <div className="newsletter-content">
                        <h3>Join the Community</h3>
                        <p>Subscribe to get exclusive offers and early access to new drops.</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
