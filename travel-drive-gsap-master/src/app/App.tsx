import { AppRouter } from './routers/AppRouter';
import { SmoothScroll } from './providers/SmoothScroll';
import { CartProvider } from './providers/CartContext';
import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';

export const App = () => {
    return (
        <CartProvider>
            <SmoothScroll>
                <Header />
                <AppRouter />
                <Footer />
            </SmoothScroll>
        </CartProvider>
    );
};