import { getPortpolioSkillsService } from '@/database';

export async function MockSkill() {
  const skills = await getPortpolioSkillsService();

  return <div>{JSON.stringify(skills)}</div>;
}
