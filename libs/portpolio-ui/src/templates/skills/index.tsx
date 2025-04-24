import Link from 'next/link';
import { MotionDiv, MotionH2 } from '../../atoms';
import { getPortpolioSkillsService } from '@/database';

export async function Skills() {
  const skills = await getPortpolioSkillsService();
  return (
    <section className="min-h-screen bg-dark-jungle flex items-center justify-center">
      <div className="container mx-auto px-4">
        <MotionH2
          className="text-4xl font-bold text-burnt-orange mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </MotionH2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills?.map((skill, index) => (
            <MotionDiv
              key={skill.name}
              className="bg-deep-teal p-4 rounded-lg flex flex-col items-center justify-center gap-3 cursor-pointer relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              <p className="text-soft-cream text-center font-medium">
                {skill.name}
              </p>

              <div className="absolute -top-2 -right-2">
                {skill.blogLink && (
                  <div className="bg-burnt-orange text-white text-xs px-2 py-1 rounded-full">
                    Blog Available
                  </div>
                )}
              </div>

              {skill.blogLink && (
                <MotionDiv
                  className="absolute inset-0 bg-black bg-opacity-80 rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <p className="text-center text-soft-cream text-sm mb-2">
                    Read my blog about {skill.name}
                  </p>
                  <Link
                    href={skill.blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-burnt-orange text-white px-4 py-2 rounded-lg hover:bg-soft-cream hover:text-burnt-orange transition-colors duration-300"
                  >
                    Read Blog
                  </Link>
                </MotionDiv>
              )}
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
