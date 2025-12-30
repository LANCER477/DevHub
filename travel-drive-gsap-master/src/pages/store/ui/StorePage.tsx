import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useCart } from '@app/providers/CartContext';
import type { Product } from '@app/providers/CartContext';
import './StorePage.css';

// Import 4epuha merch images
import teeHard from '@shared/assets/images/storePage/clothes/футболка жоская.png';
import teeExtremelyHard from '@shared/assets/images/storePage/clothes/футболка-крайне-жоская.png';
import hoodieTop from '@shared/assets/images/storePage/clothes/худи-экстра-топ.png';
import heroVideo from '@shared/assets/videos/4epumovie.mp4';

gsap.registerPlugin(ScrollToPlugin);

const CATEGORIES = [
    { id: 1, title: 'Apparel', description: 'Premium 4epuha hoodies & tees', image: '👕' },
    { id: 2, title: 'Accessories', description: 'Epic gaming gear extras', image: '🎮' },
    { id: 3, title: 'Devices', description: 'High-performance hardware', image: '⌨️' },
];

const NEW_ARRIVALS = [
    { id: 101, name: '4epuha Pro Jersey', category: 'Apparel', price: '$49.99', image: teeExtremelyHard },
    { id: 102, name: 'Obsidian MK-II Keyboard', category: 'Devices', price: '$159.99', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop' },
    { id: 103, name: 'Acoustic Elite Headset', category: 'Devices', price: '$199.99', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop' },
    { id: 104, name: 'Neon Glow Mousepad', category: 'Accessories', price: '$39.99', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop' },
];

const PRODUCTS: Product[] = [
    // Apparel (4epuha)
    { id: 1, name: '4epuha "Zhostkaya" Tee', category: 'Apparel', price: '$59.99', image: teeHard },
    { id: 5, name: '4epuha "Extra Top" Hoodie', category: 'Apparel', price: '$79.99', image: hoodieTop },
    { id: 7, name: '4epuha Elite Jersey', category: 'Apparel', price: '$64.99', image: teeExtremelyHard },
    { id: 8, name: '4epuha Founder Cap', category: 'Apparel', price: '$24.99', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop' },
    { id: 9, name: '4epuha Tech Windbreaker', category: 'Apparel', price: '$89.99', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop' },

    // Devices
    { id: 2, name: 'Pro Mechanical Keyboard', category: 'Devices', price: '$129.99', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=600&auto=format&fit=crop' },
    { id: 3, name: 'Neural Precision Mouse', category: 'Devices', price: '$79.99', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop' },
    { id: 6, name: 'Carbon Fiber Headset', category: 'Devices', price: '$149.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop' },
    { id: 10, name: 'Streamer 4K Webcam', category: 'Devices', price: '$99.99', image: 'https://images.unsplash.com/photo-1588591795084-1770cb3be374?q=80&w=600&auto=format&fit=crop' },
    { id: 11, name: 'Wireless Studio Mic', category: 'Devices', price: '$179.99', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop' },

    // Accessories
    { id: 4, name: 'Stellar RGB Mousepad', category: 'Accessories', price: '$34.99', image: 'https://images.unsplash.com/photo-1625904838463-549b679698d2?q=80&w=600&auto=format&fit=crop' },
    { id: 12, name: 'Cable Management Pro', category: 'Accessories', price: '$19.99', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=600&auto=format&fit=crop' },
    { id: 13, name: 'Dual Controller Stand', category: 'Accessories', price: '$29.99', image: 'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=600&auto=format&fit=crop' },
    { id: 14, name: 'Blue Light Glasses', category: 'Accessories', price: '$39.99', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop' },
    { id: 15, name: 'Custom Artisan Keycaps', category: 'Accessories', price: '$44.99', image: 'https://images.unsplash.com/photo-1618384881928-82ccdc125fc5?q=80&w=600&auto=format&fit=crop' },
];

const BENEFITS = [
    { title: 'Fast Delivery', desc: 'Secure shipping worldwide in 3-5 days.', icon: '🚀' },
    { title: 'Premium Quality', desc: 'Only the best materials for our gear.', icon: '💎' },
    { title: '24/7 Support', desc: 'Our team is always here to help you.', icon: '🎧' },
];

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
            .from(".search-bar", { opacity: 0, scale: 0.9, y: 10 }, "-=0.7");

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
                        <div key={product.id} className="product-card new-arrival-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <div className="product-overlay">
                                    <button className="btn-secondary" onClick={(e) => handleAddToCart(product as Product, e)}>Add to Cart</button>
                                </div>
                                <span className="new-badge">NEW</span>
                            </div>
                            <div className="product-info">
                                <span className="p-category">{product.category}</span>
                                <h4 className="p-name">{product.name}</h4>
                                <span className="p-price">{product.price}</span>
                            </div>
                        </div>
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
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <div className="product-overlay">
                                    <button className="btn-secondary" onClick={(e) => handleAddToCart(product, e)}>Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-info">
                                <span className="p-category">{product.category}</span>
                                <h4 className="p-name">{product.name}</h4>
                                <span className="p-price">{product.price}</span>
                            </div>
                        </div>
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
