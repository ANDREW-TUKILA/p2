import { useState, useEffect, useRef } from 'react';

export default function LanguageSwitcher({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const langs = [
    { key: 'en', label: 'EN' },
    { key: 'ru', label: 'RU' },
    { key: 'fr', label: 'FR' },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        className="btn btn-outline rounded-full px-3 py-2"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        title="Language"
      >
        🌐 {lang.toUpperCase()}
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 w-28 card py-2">
          {langs.map(l => (
            <li key={l.key}>
              <button
                className={`w-full text-left px-3 py-2 hover:bg-gray-100 ${lang===l.key?'font-semibold':''}`}
                onClick={() => { setLang(l.key); setOpen(false); }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
