
import { useRef, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@app/providers/CartContext';
import { PRODUCTS } from '@shared/data/products';
import './ProductDetailsPage.css';

export const ProductDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const product = PRODUCTS.find(p => p.id === Number(id));
    const containerRef = useRef<HTMLDivElement>(null);
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const [showToast, setShowToast] = useState(false);

    // Filter related products (same category, exclude current)
    const relatedProducts = PRODUCTS
        .filter(p => p.category === product?.category && p.id !== product?.id)
        .slice(0, 4);

    if (!product) {
        return <div className="store-page" style={{ paddingTop: '150px', textAlign: 'center', color: 'white' }}>Product not found</div>;
    }

    const isApparel = product.category === 'Apparel';

    const handleAddToCart = () => {
        if (isApparel && !selectedSize) {
            // Flash error or shake button (simple alert for now, can be improved)
            alert('Please select a size!');
            return;
        }

        addToCart(product, selectedSize || undefined);

        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    // Auto-scroll to top when product changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="product-details-page" ref={containerRef}>
            {/* Custom Toast Notification */}
            <div className={`cart-toast ${showToast ? 'show' : ''}`} style={{
                position: 'fixed',
                top: '100px',
                right: '20px',
                background: '#FA8305',
                color: 'white',
                padding: '15px 25px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                zIndex: 1000,
                transform: showToast ? 'translateX(0)' : 'translateX(120%)',
                transition: 'transform 0.3s ease',
                fontWeight: '600'
            }}>
                Added to cart! 🛒
            </div>

            <div className="wrapper">
                <div className="details-breadcrumb">
                    <Link to="/">Home</Link> &gt; <Link to="/store">Store</Link> &gt; <span>{product.name}</span>
                </div>

                <div className="product-details-container">
                    {/* GALLERY */}
                    <div className="product-gallery">
                        <div className="main-image-container">
                            <img src={product.image} alt={product.name} className="main-image" />
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="product-info-col">
                        <span className="details-category">{product.category}</span>
                        <h1 className="details-title">{product.name}</h1>
                        <div className="details-price">{product.price}</div>
                        <p className="details-description">
                            {product.description || "The highest quality gaming gear designed for professionals. Experience unmatched performance and style."}
                        </p>

                        {/* OPTIONS */}
                        {isApparel && (
                            <div className="product-options">
                                <div className="option-group">
                                    <span className="option-title">Select Size</span>
                                    <div className="size-selector">
                                        {['S', 'M', 'L', 'XL'].map(size => (
                                            <button
                                                key={size}
                                                className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="details-actions">
                            <button className="btn-add-cart" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* RELATED PRODUCTS */}
                {relatedProducts.length > 0 && (
                    <div className="related-products">
                        <h3 className="related-title">You might also like</h3>
                        <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                            {relatedProducts.map(p => (
                                <Link to={`/store/product/${p.id}`} key={p.id} className="product-card" style={{ textDecoration: 'none', color: 'white' }}>
                                    <div className="product-image" style={{ marginBottom: '15px' }}>
                                        <img src={p.image} alt={p.name} style={{ width: '100%', borderRadius: '15px' }} />
                                    </div>
                                    <h4 style={{ fontSize: '16px', marginBottom: '5px' }}>{p.name}</h4>
                                    <span style={{ color: '#FA8305', fontWeight: 'bold' }}>{p.price}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
