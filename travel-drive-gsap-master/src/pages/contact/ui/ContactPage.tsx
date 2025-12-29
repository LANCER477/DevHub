import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ContactPage.css';
import xIcon from '@shared/assets/logo/X.jpg';
import instIcon from '@shared/assets/logo/inst.jpg';
import ytIcon from '@shared/assets/logo/youtube.jpg';
import tgIcon from '@shared/assets/icons/telegram.png';
import vectorTop from '@shared/assets/images/contactPage/Vector 3.png';
import vectorBottom from '@shared/assets/images/contactPage/Vector 4.png';
import mapImg from '@shared/assets/images/contactPage/map.png';

interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
}

export const ContactPage = () => {
    const [formData, setFormData] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setShowSuccess(true);
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
                setTimeout(() => setShowSuccess(false), 5000);
            }, 1500);
        }
    };

    return (
        <div className="contact-page">
            <div className="wrapper">

                {/* HERO SECTION */}
                <section className="contact-hero">
                    <div className="contact-breadcrumb">
                        <Link to="/">Home</Link> <span className="breadcrumb-separator">&gt;</span> <Link to="/contact" className="active-breadcrumb">Contact us</Link>
                    </div>
                    <h1>Get in Touch with 4epuha Studio</h1>
                    <p className="hero-subtitle">
                        Have a project in mind? We're here to help you bring your ideas to life with world-class art and design.
                    </p>

                    <div className="hero-decor-dot"></div>

                    {/* MAP SECTION */}
                    <div className="map-showcase">
                        <img src={mapImg} alt="World Map" className="map-img" />
                    </div>

                    {/* INFO ROW */}
                    <div className="contact-info-row-refined">
                        <div className="info-col">
                            <span className="info-label-small">Follow us</span>
                            <div className="social-links-small">
                                <a href="#" className="social-circle-small"><img src={instIcon} alt="IG" /></a>
                                <a href="#" className="social-circle-small"><img src={xIcon} alt="X" /></a>
                                <a href="#" className="social-circle-small"><img src={ytIcon} alt="YT" /></a>
                                <a href="#" className="social-circle-small"><img src={tgIcon} alt="TG" /></a>
                            </div>
                        </div>

                        <div className="info-divider-vertical"></div>

                        <div className="info-col">
                            <div className="info-item-horizontal">
                                <span className="icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                </span>
                                <span className="info-text-large">+908 89097 890</span>
                            </div>
                        </div>

                        <div className="info-divider-vertical"></div>

                        <div className="info-col">
                            <div className="info-item-horizontal">
                                <span className="icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </span>
                                <span className="info-text-large">Istanbul, Turkey - Global Studios</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SAY HELLO SECTION WITH BG RADIUS AND LINES */}
                <section className="say-hello-section">
                    <img src={vectorTop} alt="" className="bg-vector-top" />
                    <img src={vectorBottom} alt="" className="bg-vector-bottom" />

                    <div className="say-hello-header">
                        <h2>Say hello</h2>
                        <p>Tell us about your project and let's build something epic together.</p>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className={`form-group ${errors.firstName ? 'error' : ''}`}>
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                            </div>
                            <div className={`form-group ${errors.lastName ? 'error' : ''}`}>
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                            </div>
                        </div>
                        <div className={`form-group ${errors.email ? 'error' : ''}`}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>
                        <div className={`form-group ${errors.message ? 'error' : ''}`}>
                            <label>Message</label>
                            <textarea
                                rows={6}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {errors.message && <span className="error-text">{errors.message}</span>}
                        </div>

                        <div className="form-actions">
                            {showSuccess && <div className="success-msg">Message sent successfully! ✨</div>}
                            <button type="submit" className="get-in-touch-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Get in touch'}
                            </button>
                        </div>
                    </form>
                </section>

                <div className="contact-bottom-spacer"></div>

            </div>
        </div>
    );
};
