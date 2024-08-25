import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga4';
import { createRoot } from 'react-dom/client';
import App from './App';
import './global.css';
import 'react-toastify/dist/ReactToastify.css';

//global

import { global } from 'global';
import { AuthProvider } from './context/authProvider';
window.global = global;

ReactGA.initialize('G-T0XMKBP3BZ');
const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  const env = process.env.NODE_ENV;

  const tagManagerArgs = {
    gtmId: 'GTM-MKVT5BDK',
    auth:
      env === 'development'
        ? 'GdVg_dzv1iFjX1bNjelpIg'
        : 'CA37gzaOktKFjo0A7APAkQ',
    preview: env === 'development' ? 'env-6' : 'env-1',
  };

  try {
    TagManager.initialize(tagManagerArgs);
  } catch (error) {
    console.error('Failed to initialize Tag Manager:', error);
  }

  root.render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  );
} else {
  console.error('Failed to find the root element');
}
