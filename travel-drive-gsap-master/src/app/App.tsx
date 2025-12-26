import { AppRouter } from './routers/AppRouter';
import { SmoothScroll } from './providers/SmoothScroll';
import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';

export const App = () => {
    return (
        <SmoothScroll>
            <Header />
            <AppRouter />
            <Footer />
        </SmoothScroll>
    );
};