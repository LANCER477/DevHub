import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app/App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    );
};

createRoot(document.getElementById('root')!).render(<Root />);