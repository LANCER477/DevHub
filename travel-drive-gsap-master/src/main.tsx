import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    );
};

createRoot(document.getElementById('root')!).render(<Root />);