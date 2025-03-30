export const postSelectObject = {
  id: true,
  filename: true,
  title: true,
  status: true,
  author: {
    select: {
      id: true,
      name: true,
    },
  },
  category: {
    select: {
      id: true,
      name: true,
      image: true,
      categoryGroup: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  },
  createdAt: true,
  updatedAt: true,
};
