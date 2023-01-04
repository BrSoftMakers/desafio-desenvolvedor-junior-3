import md5 from 'md5';
import prisma from './prisma';

const seedDatabase = async () => {
  await prisma.user.createMany({
    data: [
      { username: 'admin', 
        name: 'Franklin Ramos', 
        password: md5('123Admin'),
        role: 'ADMIN', 
      },
      { username: 'john',  
        password: md5('1234User'), 
      },
    ],
  });
};

seedDatabase();