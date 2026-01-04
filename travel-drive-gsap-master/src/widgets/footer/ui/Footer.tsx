import './Footer.css';
import logo from '@shared/assets/logo/logo4epuha-white.png';
import xIcon from '@shared/assets/logo/X.jpg';
import instIcon from '@shared/assets/logo/inst.jpg';
import ytIcon from '@shared/assets/logo/youtube.jpg';
import tgIcon from '@shared/assets/icons/telegram.png';

export const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-top-info">
                <h3>Collaborate with 4epuha</h3>
                <p>We are always looking for new challenges and creative partners to push the boundaries of gaming art and design.</p>
            </div>

            <div className="newsletter-section">
                <div className="newsletter-content">
                    <h3>Stay in the loop</h3>
                    <p>
                        Subscribe to receive the latest news and updates about 4epuha.
                        We promise not to spam you!
                    </p>
                </div>
                <div className="newsletter-form">
                    <input type="email" placeholder="Enter email address" />
                    <button>Continue</button>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-logo">
                    <img src={logo} alt="4epuha Logo" className="footer-logo-img" />
                    <p>
                        A leading game development studio delivering high-quality 2D/3D art, animation, and game design services.
                    </p>
                    <div className="company-tag">@4epuha</div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>About us</h4>
                        <ul>
                            <li><a href="#">Zeux</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact us</h4>
                        <p>
                            Get in touch for collaborations, project inquiries, or just to say hello!
                        </p>
                        <p>+908 89097 890</p>
                    </div>
                </div>

                <div className="footer-socials">
                    <div className="social-icon"><img src={instIcon} alt="Instagram" /></div>
                    <div className="social-icon"><img src={xIcon} alt="X" /></div>
                    <div className="social-icon"><img src={ytIcon} alt="YouTube" /></div>
                    <div className="social-icon telegram"><img src={tgIcon} alt="Telegram" /></div>
                </div>
            </div>

            <div className="copyright">
                Copyright ® 2023 4epuha All rights Reserved
            </div>
        </footer>
    );
};
