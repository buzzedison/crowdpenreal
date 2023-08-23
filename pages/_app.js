import '@/styles/globals.css'

import { useEffect } from 'react';
import { initGA, logPageView } from '../analytics';

function App({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return <Component {...pageProps} />;
}

export default App;
