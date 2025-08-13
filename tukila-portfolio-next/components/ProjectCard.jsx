import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ lang, project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="card overflow-hidden hover:-translate-y-1 hover:shadow-xl transition block">
      <div className="relative h-56 w-full">
        <Image src={project.cover} alt="" fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title[lang]}</h3>
        <p className="text-sm text-gray-600 mt-1">{project.summary[lang]}</p>
      </div>
    </Link>
  );
}
