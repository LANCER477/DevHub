import { Link } from 'react-router-dom';
import './StorePage.css';

export const StorePage = () => {
    return (
        <div className="store-page">
            <div className="wrapper">
                <section className="store-hero">
                    <div className="store-breadcrumb">
                        <Link to="/">Home</Link> &gt; <Link to="/store" className="active-breadcrumb">Store</Link>
                    </div>
                    <h1>Store</h1>
                    <p>Coming soon...</p>
                </section>
            </div>
        </div>
    );
};
