export default function Skills({ lang }) {
  const t = (en, ru, fr) => lang === 'ru' ? ru : lang === 'fr' ? fr : en;
  const blocks = [
    {
      title: t('Construction','Строительство','Construction'),
      items: [
        t('Project Management','Управление проектами','Gestion de projet'),
        t('Site Supervision','Прораб / Надзор','Supervision de chantier'),
        t('Procurement & Logistics','Закупки и логистика','Approvisionnement & logistique'),
        t('Masonry, Concrete, Timber','Кладка, бетон, дерево','Maçonnerie, béton, bois'),
        t('Roofing, Windows & Doors','Кровля, окна и двери','Toiture, fenêtres & portes'),
        t('Renovation & Finishing','Ремонт и отделка','Rénovation & finitions')
      ]
    },
    {
      title: t('Digital / IT','Цифровые / IT','Numérique / IT'),
      items: [
        'AutoCAD / SketchUp / Revit (basic)',
        t('Excel, VBA, Python (automation)','Excel, VBA, Python (автоматизация)','Excel, VBA, Python (automation)'),
        t('Small web tools & process automation','Небольшие веб-инструменты и автоматизация процессов','Outils web & automatisation des processus')
      ]
    },
    {
      title: t('Languages','Языки','Langues'),
      items: [
        t('Russian — Native','Русский — Родной','Russe — Natif'),
        t('English — B2/C1','Английский — B2/C1','Anglais — B2/C1'),
        t('French — Intermediate','Французский — Средний','Français — Intermédiaire'),
        t('Polish — Conversational','Польский — Разговорный','Polonais — Conversationnel')
      ]
    }
  ];
  return (
    <section className="container mt-14">
      <h2 className="text-2xl font-bold">{t('Core Skills','Ключевые навыки','Compétences clés')}</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {blocks.map((b, idx) => (
          <div key={idx} className="card p-5">
            <h3 className="font-semibold">{b.title}</h3>
            <ul className="mt-3 grid gap-1 text-sm text-gray-700">
              {b.items.map((it,i)=>(<li key={i} className="flex items-center gap-2"><span className="badge">•</span><span>{it}</span></li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
