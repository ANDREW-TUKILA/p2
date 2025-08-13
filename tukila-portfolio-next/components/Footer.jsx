export default function Footer({ lang, profile }) {
  const t = (en, ru, fr) => lang === 'ru' ? ru : lang === 'fr' ? fr : en;
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">{t('Contact','Контакты','Contact')}</h4>
          <p>Email: <a className="text-blue-600" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p className="mt-1">{t('Phone','Телефон','Téléphone')}: {profile.phone}</p>
          <p className="mt-1">WhatsApp: {profile.whatsapp}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">{t('Resume','Резюме','CV')}</h4>
          <a href="/cv.pdf" className="btn btn-outline">{t('Download PDF','Скачать PDF','Télécharger PDF')}</a>
        </div>
        <div>
          <h4 className="font-semibold mb-2">{t('Links','Ссылки','Liens')}</h4>
          <ul className="space-y-1">
            {profile.socials.map((s, i) => (
              <li key={i}><a className="text-blue-600" href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{t('Built for construction & project management','Сайт для строительства и управления проектами','Conçu pour la construction & gestion de projet')}</span>
        </div>
      </div>
    </footer>
  );
}
