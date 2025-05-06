'use client';

import { AboutMe, ContactMe } from '../index';
import { JSX, useCallback, useRef } from 'react';
import { PageAnimation } from '../../organisms';

type TPageContainerProps = {
  ProjectsElement: JSX.Element;
  SkillElement: JSX.Element;
};

export const PageContainer: React.FC<TPageContainerProps> = ({
  SkillElement,
  ProjectsElement,
}) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);

  const onViewportEnter = useCallback((id: string) => {
    // Check if the current hash matches the ID of the element
    // Ignore scroll into view
    const hash = window.location.hash.slice(1);

    if (hash !== id && id !== 'contact-me') return;

    let scrollPosition = 0;

    // Calculate the scroll position based on the ID
    switch (id) {
      case 'about':
        scrollPosition = 0;
        break;
      case 'skills':
        scrollPosition = aboutRef.current?.offsetHeight || 0;
        break;
      case 'projects':
        scrollPosition =
          (aboutRef.current?.offsetHeight || 0) +
          (skillsRef.current?.offsetHeight || 0);
        break;
      case 'contact-me':
        scrollPosition =
          (aboutRef.current?.offsetHeight || 0) +
          (skillsRef.current?.offsetHeight || 0) +
          (projectsRef.current?.offsetHeight || 0);
        break;
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div>
      <PageAnimation id="about" ref={aboutRef} callback={onViewportEnter}>
        <AboutMe />
      </PageAnimation>

      <PageAnimation id="skills" ref={skillsRef} callback={onViewportEnter}>
        {SkillElement}
      </PageAnimation>

      <PageAnimation id="projects" ref={projectsRef} callback={onViewportEnter}>
        {ProjectsElement}
      </PageAnimation>

      <PageAnimation
        id="contact-me"
        ref={contactMeRef}
        callback={onViewportEnter}
      >
        <ContactMe />
      </PageAnimation>
    </div>
  );
};
