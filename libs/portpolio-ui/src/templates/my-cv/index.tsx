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
            />
            <h2 className="absolute bottom-4 mx-4 text-black text-2xl font-bold">
              Thach Dong
            </h2>
          </div>

          {/* Contact Info */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <i className="fa-solid fa-briefcase !text-dark-jungle mr-4"></i>
              <span>Front-end developer</span>
            </div>

            <Link
              href="https://www.google.com/maps/dir/10.8416774,106.7352588/74,+5+%C4%90%C6%B0%E1%BB%9Dng+36,+Linh+%C4%90%C3%B4ng,+Th%E1%BB%A7+%C4%90%E1%BB%A9c,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.8405581,106.7415128,17z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x317527c80d9e1e47:0x1c843929fb7657aa!2m2!1d106.7457638!2d10.84048!3e0"
              target="_blank"
              className="flex items-center mb-4 text-gray-600"
            >
              <i className="fa-solid fa-house-chimney text-teal-600 mr-4"></i>
              <span>Thu Duc, HCM city</span>
            </Link>

            <Link
              href="mailto:thachdong270293@gmail.com"
              className="flex items-center mb-4 text-gray-600"
            >
              <i className="fa-solid fa-envelope text-teal-600 mr-4"></i>
              <span>thachdong270293@gmail.com</span>
            </Link>

            <Link
              href="tel:0353860797"
              className="flex items-center text-gray-600"
            >
              <i className="fa-solid fa-phone text-teal-600 mr-4"></i>
              <span>0353 860 797</span>
            </Link>
          </div>

          <hr className="mx-4 border-t border-gray-200" />

          {/* About Me */}
          <div className="p-4">
            <h3 className="flex items-center">
              <i className="fa-solid fa-bullseye text-teal-600 mr-2"></i>
              About me
            </h3>

            <ul className="list-disc pl-8 space-y-2">
              <li>
                I have 2.5 years of experiences in front-end development,
                include 2 years working with Reactjs and it ecosystem libraries.
              </li>
              <li>I familiar with development tool like Scrum.</li>
              <li>
                I realized that English is extremely important tool for growing
                programming skills, so I want to join team with english
                communication environment (my speaking skills is not good then i
                think that will helpfully for improving speaking).
              </li>
            </ul>
          </div>

          <hr className="mx-4 border-t border-gray-200" />

          {/* Skills */}
          <div className="p-4">
            <h3 className="flex items-center">
              <i className="fa-solid fa-asterisk text-teal-600 mr-2"></i>
              Skills
            </h3>
            <ul className="list-disc pl-8 space-y-2">
              <li>Problem solving.</li>
              <li>Teamworking.</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-[65%] flex flex-col gap-y-4">
          {/* Knowledge */}
          <section
            className="p-4 shadow-lg flex-grow"
            style={{
              boxShadow:
                '0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)',
            }}
          >
            <h2 className="text-3xl flex items-center">
              <i className="fa-solid fa-graduation-cap text-teal-600 mr-4"></i>
              Knowledge
            </h2>

            <section>
              <h3>
                <strong>
                  <i className="fa-solid fa-circle-check text-highlight mr-2"></i>
                  Javascript fundamentals(have confidence):
                </strong>
              </h3>
              <ul>
                <li>Scope system</li>
                <li>Function closures</li>
                <li>Module design pattern</li>
                <li>Prototypal inheritance</li>
                <li>
                  Asynchronous implementations with callback, promise,
                  async/await
                </li>
                <li>Type checking with typescript</li>
              </ul>
            </section>

            <section>
              <h3>
                <strong>
                  <i className="fa-solid fa-circle-check text-highlight mr-2"></i>
                  Javascript libraries (familiar with):
                </strong>
              </h3>

              <ul>
                <li>
                  SPA frameworks/libraries: ReactJs, NextJs (strongly in
                  function components, performance optimize)
                </li>
                <li>
                  UI frameworks/libraries: Bootstrap, tailwindcss, ant design,
                  material ui, react-query, react-hook-form, momentjs,
                  redux-toolkit, i18next ...
                </li>
              </ul>
            </section>

            <section>
              <h3 className="mb-0">
                <strong>
                  <i className="fa-solid fa-circle-check text-highlight mr-2"></i>
                  Other things:
                  <span className="font-size: 1rem; font-weight: 400">
                    Source control with git, Agile-Scrum working flow,
                    bitbucket, Opsgenie, figma ...
                  </span>
                </strong>
              </h3>
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
            <h2 className="text-3xl flex items-center">
              <i className="fa-solid fa-briefcase text-teal-600 mr-4"></i>
              Work Experience
            </h2>

            <div className="mb-4 border-b border-gray-200 pb-4">
              <h3>Front End Developer / Mona Software</h3>
              <div className="flex items-center text-teal-600 mb-4">
                <i className="fa-solid fa-calendar-days mr-4"></i>
                Sep 2022 -{' '}
                <span className="bg-teal-600 text-white rounded px-2 ml-2 leading-6">
                  Current
                </span>
              </div>
              <p className="mb-4">
                Join outsourcing projects. Almostly, build ERP web apps.
              </p>
              <p>
                Libraries/frameworks used: Nextjs, tailwindcss, ant design,
                marterial-ui, react-hook-form ...
              </p>
            </div>

            <section className="mb-4 border-bottom">
              <h3>Front End Developer / AKADON</h3>
              <div className="flex-box text-highlight mb-4">
                <i className="fa-solid fa-calendar-days mr-4"></i>
                Sep 2020 - Sep 2022
              </div>
              <p>
                Developing company's products, applications for connecting
                tutors and students. Key features: bidding courses; connect
                students to tutors by messaging and video call system; manage
                learning/teaching schedules; support multiple languages; LMS
                features ...
              </p>
              <p>
                Libraries/frameworks used: Reactjs, Redux-toolkits, Bootstrap,
                Twilio, Fullcalendar ...
              </p>
            </section>

            <section>
              <h3>Front End Intern / Egany</h3>
              <div className="flex-box text-highlight mb-4">
                <i className="fa-solid fa-calendar-days mr-4"></i>
                Dec 2019 - May 2020
              </div>
              <p className="mb-0">
                Build landing pages base on ecommerce flatform like Haravan and
                Shopify using html, css, javascript, liquid.
              </p>
            </section>
          </section>
        </main>
      </div>

      {/* Download Button */}
      <div className="fixed bottom-4 inset-x-0">
        <div className="max-w-[1366px] flex justify-end mx-auto px-4">
          <Link
            href="./Dong-Thach-CV.pdf"
            target="_blank"
            className="text-2xl text-teal-600 animate-bounce"
          >
            <i className="fa-solid fa-cloud-arrow-down"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
