import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PROFILE } from '@/data/config';
import { PROJECTS } from '@/data/projects';

export default function ProjectPage({ project, lang, setLang }) {
  if (!project) return <div />;
  const t = (en, ru, fr) => lang === 'ru' ? ru : lang === 'fr' ? fr : en;

  return (
    <>
      <Head>
        <title>{project.title[lang]} — {PROFILE.name}</title>
        <meta name="description" content={project.summary[lang]} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Header lang={lang} setLang={setLang} email={PROFILE.email} />
      <main className="pt-28">
        <div className="container">
          <Link href="/#projects" className="text-blue-600 text-sm">&larr; {t('Back to projects','Назад к проектам','Retour aux projets')}</Link>
          <h1 className="text-3xl font-extrabold mt-2">{project.title[lang]}</h1>
          <p className="mt-2 text-gray-700">{project.summary[lang]}</p>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {project.details[lang].map((d, i) => <li key={i}>{d}</li>)}
          </ul>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((src, i) => (
              <div key={i} className="relative h-64 card overflow-hidden">
                <Image src={src} alt={`Photo ${i+1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={lang} profile={PROFILE} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: PROJECTS.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = PROJECTS.find(p => p.slug === params.slug) || null;
  return { props: { project } };
}
