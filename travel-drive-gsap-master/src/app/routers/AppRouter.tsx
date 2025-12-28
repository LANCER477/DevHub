import { Routes, Route } from 'react-router-dom';
import { HomePage, RegisterPage, AboutPage, ServicesPage, StorePage } from '../../pages';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
};