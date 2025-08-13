import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ lang, profile }) {
  const t = (en, ru, fr) => lang === 'ru' ? ru : lang === 'fr' ? fr : en;

  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 -z-10">
        <Image src="/placeholder-hero.jpg" alt="Hero background" fill priority className="object-cover opacity-70" />
      </div>
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">{profile.name}</h1>
          <p className="mt-2 text-xl drop-shadow" >
            {profile.role[lang]}
          </p>
          <p className="mt-4 max-w-xl drop-shadow">
            {profile.location[lang]}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#projects" className="btn btn-primary">{t('View Projects','Смотреть проекты','Voir les projets')}</Link>
            <a href="/cv.pdf" className="btn btn-outline">{t('Download CV','Скачать резюме','Télécharger le CV')}</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-white/70 shadow-2xl">
            <Image src="/profile.jpg" alt="Profile photo" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
