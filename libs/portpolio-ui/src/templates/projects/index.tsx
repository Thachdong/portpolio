import { getPortpolioProjectsService } from '@/database';
import { MotionDiv, MotionH2, MotionP } from '../../atoms';

export async function Projects() {
  const projects = await getPortpolioProjectsService();
  return (
    <section className="min-h-screen bg-dark-jungle flex items-center justify-center">
      <div className="container mx-auto px-4">
        <MotionH2
          className="text-4xl font-bold text-burnt-orange mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Personal Projects
        </MotionH2>

        <MotionP
          className="text-soft-cream text-center mb-8 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Note: Most projects I've worked on are private. Below are some
          personal projects I can share.
        </MotionP>

        <div className="grid md:grid-cols-2 gap-8">
          {projects?.map((project, index) => (
            <MotionDiv
              key={project.title}
              className="bg-deep-teal p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-burnt-orange mb-4">
                {project.title}
              </h3>
              <p className="text-soft-cream mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-burnt-orange font-semibold mb-2">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-dark-jungle text-soft-cream px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-burnt-orange font-semibold mb-2">
                  Key Features:
                </h4>
                <ul className="list-disc list-inside text-soft-cream">
                  {project.features.map((feature) => (
                    <li key={feature} className="mb-1">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-burnt-orange hover:text-soft-cream transition-colors"
              >
                View on GitHub
              </a>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
