import '@/styles/globals.css'
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    if (stored) setLang(stored);
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return <Component {...pageProps} lang={lang} setLang={setLang} />;
}
