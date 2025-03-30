import { z } from 'zod';

export const frontMatterSchema = z.object({
  // categoryGroupId: z.string().nonempty(),
  categoryId: z.string().nonempty(),
  authorId: z.string().nonempty(),
  status: z.string().nonempty(),
  // publishedAt: z.string().nonempty(),
  title: z.string().nonempty(),
});
