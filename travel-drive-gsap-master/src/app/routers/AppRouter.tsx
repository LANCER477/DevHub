import { Routes, Route } from 'react-router-dom';
import { HomePage, RegisterPage, AboutPage, ServicesPage, StorePage, ContactPage, NewsPage, CartPage } from '../../pages';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
};