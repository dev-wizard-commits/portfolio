import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  technologies?: readonly string[];
  features?: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  technologies,
  features,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm hover:border-[#b49bff] transition-all duration-300 group"
    >
      <div className="relative overflow-hidden h-64 bg-[#030014]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized={src.startsWith("http")}
        />
      </div>

      <div className="relative p-6">
        <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>
        <p className="mt-2 text-gray-300 mb-4 leading-relaxed">{description}</p>
        
        {features && features.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-[#b49bff] mb-2">Key Features:</h3>
            <ul className="space-y-1">
              {features.map((feature, idx) => (
                <li key={idx} className="text-gray-400 text-sm flex items-start">
                  <span className="text-[#b49bff] mr-2">▹</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-[#7042f88b] rounded text-xs text-gray-200 border border-[#b49bff]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
