import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ lang, setLang, email }) {
  const t = (en, ru, fr) => lang === 'ru' ? ru : lang === 'fr' ? fr : en;
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur border-b">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          TUKILA ANDRE
        </Link>
        <nav className="hidden sm:flex items-center gap-3">
          <Link href="/#projects" className="btn btn-outline">{t('Projects','Проекты','Projets')}</Link>
          <a href={`mailto:${email}`} className="btn btn-primary">{t('Write Email','Написать письмо','Écrire un email')}</a>
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </nav>
        <div className="sm:hidden flex items-center gap-2">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <a href={`mailto:${email}`} className="btn btn-primary">{t('Email','Email','Email')}</a>
        </div>
      </div>
    </header>
  );
}
