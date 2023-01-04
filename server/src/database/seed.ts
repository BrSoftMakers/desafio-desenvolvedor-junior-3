import prisma from './prisma';

const seedDatabase = async () => {
  await prisma.user.createMany({
    data: [
      { username: 'admin', 
        name: 'Franklin Ramos', 
        password: 'admin',
        role: 'ADMIN', 
      },
      { username: 'john', 
        name: 'John Doe', 
        password: '123456', 
      },
    ],
  });
};

seedDatabase();