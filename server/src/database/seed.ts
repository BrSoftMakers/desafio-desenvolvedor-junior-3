import md5 from 'md5';
import newPostMock from './mocks/newPostMock';
import prisma from './prisma';

const seedDatabase = async () => {
  await prisma.user.createMany({ data: [
    { username: 'admin', 
      name: 'Franklin', 
      password: md5('123Admin'),
      role: 'ADMIN', 
    },
    { username: 'user',
      name: 'Outro Usuário', 
      password: md5('1234User'), 
    }],
  });

  const user = await prisma.user.findMany({});

  await prisma.posts.createMany({ data: [
    { ...newPostMock[0], authorId: user[0].id },
    { ...newPostMock[1], authorId: user[1].id }],
  });
};

seedDatabase();