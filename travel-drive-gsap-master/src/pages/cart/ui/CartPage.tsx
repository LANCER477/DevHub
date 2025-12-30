import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '@app/providers/CartContext';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './CartPage.css';

export const CartPage = () => {
    const { cartItems, removeFromCart, totalPrice, totalCount, clearCart } = useCart();
    const navigate = useNavigate();

    useGSAP(() => {
        gsap.from(".cart-item", {
            opacity: 0,
            x: -20,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out"
        });

        gsap.from(".cart-summary", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out"
        });
    }, [cartItems.length]);

    if (cartItems.length === 0) {
        return (
            <div className="cart-page empty-cart wrapper">
                <div className="empty-cart-content">
                    <div className="empty-icon">🛒</div>
                    <h1>Your Cart is Empty</h1>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <button className="btn-primary" onClick={() => navigate('/store')}>
                        Go to Store
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page wrapper">
            <div className="cart-header">
                <h1>Shopping Cart</h1>
                <p>{totalCount} {totalCount === 1 ? 'item' : 'items'} in your bag</p>
            </div>

            <div className="cart-container">
                <div className="cart-items-list">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-details">
                                <span className="item-category">{item.category}</span>
                                <h3>{item.name}</h3>
                                <div className="item-actions">
                                    <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div className="item-price">
                                <span>{item.price}</span>
                                {item.quantity > 1 && <span className="item-qty">x{item.quantity}</span>}
                            </div>
                        </div>
                    ))}

                    <div className="cart-footer-actions">
                        <Link to="/store" className="btn-text">&larr; Continue Shopping</Link>
                        <button className="btn-text-danger" onClick={clearCart}>Clear All</button>
                    </div>
                </div>

                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span className="free">FREE</span>
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="btn-checkout">
                        Proceed to Checkout
                    </button>
                    <div className="payment-icons">
                        <span>🔒 Secure Payment</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
