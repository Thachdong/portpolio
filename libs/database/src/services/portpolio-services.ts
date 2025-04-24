'use server';

import { CONFIG_KEYS } from '@/utility';
import prisma from '../prisma';
import { TPortpolioProject, TPortpolioSkill } from '../types/portpolio';
import { Config } from '@prisma/client';

const configRepository = prisma.config;

/**
 * Get portpolio skills
 * @returns The portpolio skills
 */
export async function getPortpolioSkillsService(): Promise<
  TPortpolioSkill[] | null
> {
  const result = await configRepository.findUnique({
    where: {
      key: CONFIG_KEYS.PORTPOLIO_SKILLS,
    },
  });

  if (!result || !result.value) {
    return null;
  }

  return result.value as TPortpolioSkill[];
}

/**
 * Get portpolio projects
 * @returns The portpolio projects
 */
export async function getPortpolioProjectsService(): Promise<
  TPortpolioProject[] | null
> {
  const result = await configRepository.findUnique({
    where: {
      key: CONFIG_KEYS.PORTPOLIO_PROJECTS,
    },
  });

  if (!result || !result.value) {
    return null;
  }

  return result.value as TPortpolioProject[];
}

/**
 * Create config
 * @param key - The key of the config
 * @param value - The value of the config
 * @return The created config
 */
export async function createConfigService(
  key: string,
  value: string
): Promise<Config | void> {
  const result = await configRepository.create({
    data: {
      key,
      value,
    },
  });

  return result;
}
