import Image from 'next/image';
import Link from 'next/link';
import './index.css';
export const MyCV = () => {
  return (
    <div className="min-h-screen bg-white text-gray-600 p-4">
      <div className="mx-auto max-w-[1366px] flex flex-col md:flex-row">
        {/* Left Side */}
        <aside
          className="w-full md:w-[35%] md:mr-4"
          style={{
            boxShadow:
              '0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)',
          }}
        >
          {/* Avatar Section */}
          <div className="relative bg-[#ebe7e4] text-center">
            <Image
              src="https://res.cloudinary.com/dongthach/image/upload/v1657530088/ecommerce/avatar_nuhxqf.png"
              alt="Thach Dong"
              width={300}
              height={300}
              className="w-[55%] mx-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <h2 className="absolute bottom-4 mx-4 text-deep-teal text-2xl font-bold">
              Thach Dong
            </h2>
          </div>

          {/* Contact Info */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <i className="fa-solid fa-briefcase !text-deep-teal mr-4"></i>
              <span>Front-end developer</span>
            </div>

            <Link
              href="https://www.google.com/maps/dir/10.8416774,106.7352588/74,+5+%C4%90%C6%B0%E1%BB%9Dng+36,+Linh+%C4%90%C3%B4ng,+Th%E1%BB%A7+%C4%90%E1%BB%A9c,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.8405581,106.7415128,17z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x317527c80d9e1e47:0x1c843929fb7657aa!2m2!1d106.7457638!2d10.84048!3e0"
              target="_blank"
              className="flex items-center mb-4 text-gray-600"
            >
              <i className="fa-solid fa-house-chimney text-deep-teal mr-4"></i>
              <span>Thu Duc, HCM city</span>
            </Link>

            <Link
              href="mailto:thachdong270293@gmail.com"
              className="flex items-center mb-4 text-gray-600"
            >
              <i className="fa-solid fa-envelope text-deep-teal mr-4"></i>
              <span>thachdong270293@gmail.com</span>
            </Link>

            <Link
              href="tel:0353860797"
              className="flex items-center text-gray-600"
            >
              <i className="fa-solid fa-phone text-deep-teal mr-4"></i>
              <span>0353 860 797</span>
            </Link>
          </div>

          <hr className="mx-4 border-t border-gray-200" />

          {/* About Me */}
          <div className="p-4">
            <h3 className="flex items-center mb-2">
              <i className="fa-solid fa-bullseye text-deep-teal mr-2"></i>
              About me
            </h3>

            <ul className="list-disc pl-8 space-y-2">
              <li className="text-justify">
                Senior front-end developer with 4+ years of experience building
                scalable web applications using React and modern JavaScript
              </li>
              <li className="text-justify">
                Expert in micro-frontend architectures including Module
                Federation and Next.js Multi Zone approaches
              </li>
              <li className="text-justify">
                Strong advocate for code quality, test coverage, and continuous
                deployment practices
              </li>
              <li className="text-justify">
                Proven track record of delivering complex enterprise
                applications and mentoring junior developers
              </li>
            </ul>
          </div>

          <section className="p-4">
            <h3 className="mb-2">
              <strong>
                <i className="fa-solid fa-briefcase text-deep-teal mr-2"></i>
                Professional Skills:
              </strong>
            </h3>
            <ul className="list-disc pl-8 space-y-2 mb-4">
              <li className="text-justify">
                Agile/Scrum methodology and project management
              </li>
              <li className="text-justify">
                Code review and technical documentation
              </li>
              <li className="text-justify">Team collaboration and mentoring</li>
              <li className="text-justify">
                Problem-solving and architectural design
              </li>
            </ul>
          </section>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-[65%] flex flex-col gap-y-4">
          {/* Knowledge & Skills */}
          <section
            className="p-4 shadow-lg flex-grow"
            style={{
              boxShadow:
                '0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)',
            }}
          >
            <h2 className="text-3xl flex items-center mb-4">
              <i className="fa-solid fa-graduation-cap text-deep-teal mr-4"></i>
              Knowledge & Skills
            </h2>

            <section>
              <h3 className="mb-2">
                <strong>
                  <i className="fa-solid fa-circle-check text-deep-teal mr-2"></i>
                  Core Technical Skills:
                </strong>
              </h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li className="text-justify">
                  Frontend Development: React, Next.js, Vue.js, TypeScript,
                  JavaScript
                </li>
                <li className="text-justify">
                  Backend Integration: NestJS, Prisma, TypeORM, PostgreSQL
                </li>
                <li className="text-justify">
                  DevOps & Deployment: AWS, Docker, Git, CI/CD pipelines
                </li>
                <li className="text-justify">
                  Testing & Quality: Jest, Vitest, Storybook, SonarQube
                </li>
                <li className="text-justify">
                  Build Tools: Nx Workspace, Webpack, Vite
                </li>
                <li className="text-justify">
                  UI/UX: Tailwind CSS, CSS3, HTML5, Figma
                </li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2">
                <strong>
                  <i className="fa-solid fa-circle-check text-deep-teal mr-2"></i>
                  JavaScript Expertise:
                </strong>
              </h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li className="text-justify">
                  Advanced scope and closure management
                </li>
                <li className="text-justify">
                  Module patterns and architecture design
                </li>
                <li className="text-justify">
                  Prototypal inheritance and OOP concepts
                </li>
                <li className="text-justify">
                  Asynchronous programming (Promises, async/await)
                </li>
                <li className="text-justify">
                  TypeScript type system and advanced features
                </li>
                <li className="text-justify">
                  Performance optimization techniques
                </li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2">
                <strong>
                  <i className="fa-solid fa-circle-check text-deep-teal mr-2"></i>
                  Framework & Library Proficiency:
                </strong>
              </h3>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li className="text-justify">
                  React ecosystem: Hooks, Context, Redux Toolkit, React Query
                </li>
                <li className="text-justify">
                  Next.js: SSR, SSG, ISR, API Routes, Middleware
                </li>
                <li className="text-justify">
                  UI Libraries: Material UI, Ant Design, Tailwind CSS
                </li>
                <li className="text-justify">
                  Form Management: React Hook Form
                </li>
                <li className="text-justify">
                  State Management: Redux Toolkit
                </li>
              </ul>
            </section>
          </section>

          {/* Work Experience */}
          <section
            className="p-4 shadow-lg"
            style={{
              boxShadow:
                '0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)',
            }}
          >
            <h2 className="text-3xl flex items-center mb-4">
              <i className="fa-solid fa-briefcase text-deep-teal mr-4"></i>
              Work Experience
            </h2>

            <div className="mb-4 border-b border-gray-200 pb-4">
              <h3 className="mb-2">Front End Developer / GMO Runsystem</h3>
              <div className="flex items-center text-deep-teal mb-4">
                <i className="fa-solid fa-calendar-days mr-4"></i>
                Apr 2023 -{' '}
                <span className="bg-deep-teal text-white rounded px-2 ml-2 leading-6">
                  Current
                </span>
              </div>
              <p className="mb-4 text-justify">
                Working on Japanese banking domain projects with a focus on high
                code quality and maintainability. Implementing atomic design
                principles and strict code quality configurations.
              </p>
              <p className="text-justify">
                Technologies used: Next.js, React.js, Vue 2, TypeScript, ESLint,
                Prettier, Jest, SonarQube
              </p>
            </div>

            <div className="mb-4 border-b border-gray-200 pb-4">
              <h3 className="mb-2">Front End Developer / Mona Software</h3>
              <div className="flex items-center text-deep-teal mb-4">
                <i className="fa-solid fa-calendar-days mr-4"></i>
                Sep 2022 - Mar 2023
              </div>
              <p className="mb-4 text-justify">
                Developed enterprise resource planning (ERP) web applications
                for various outsourcing projects. Focused on building responsive
                and user-friendly interfaces.
              </p>
              <p className="text-justify">
                Technologies used: Next.js, Tailwind CSS, Ant Design,
                Material-UI, React Hook Form, Redux Toolkit
              </p>
            </div>

            <section>
              <h3 className="mb-2">Front End Developer / AKADON</h3>
              <div className="flex items-center text-deep-teal mb-4">
                <i className="fa-solid fa-calendar-days mr-4"></i>
                Sep 2020 - Sep 2022
              </div>
              <p className="mb-4 text-justify">
                Developed an educational platform connecting tutors and
                students. Implemented key features including course bidding
                system, real-time messaging, video calls, learning management
                system (LMS), and multilingual support.
              </p>
              <p className="text-justify">
                Technologies used: React.js, Redux Toolkit, Bootstrap, Twilio,
                FullCalendar, i18n
              </p>
            </section>
          </section>
        </main>
      </div>

      {/* Download Button */}
      <div className="fixed bottom-4 inset-x-0">
        <div className="max-w-[1366px] flex justify-end mx-auto px-4">
          <Link
            href="./Dong.T-CV.pdf"
            target="_blank"
            className="text-2xl text-deep-teal animate-bounce"
          >
            <i className="fa-solid fa-cloud-arrow-down"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
