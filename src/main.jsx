import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext';
import { ClinicDataProvider } from './context/ClinicDataContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <ClinicDataProvider>
        <App />
      </ClinicDataProvider>
    </LanguageProvider>
  </StrictMode>,
);
