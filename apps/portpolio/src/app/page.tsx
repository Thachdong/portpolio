import { Header, PageContainer, Skills, Projects } from '@/portpolio-ui';

export const metadata = {
  title: "Dongt's Portpolio | Home",
  description: "Welcome to Dongt's Portpolio",
};

export default async function Index() {
  const SkillsElement = await Skills();
  const ProjectsElement = await Projects();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 header-container">
        <div className="max-w-screen-xl mx-auto">
          <Header />
        </div>
      </div>

      <PageContainer
        SkillElement={SkillsElement}
        ProjectsElement={ProjectsElement}
      />
    </>
  );
}
