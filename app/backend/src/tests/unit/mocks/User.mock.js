const recoverdUser = [
  {
    id: 8,
    name: 'Airel Ribeiro',
    email: 'airel.ribeiro@gmail.com',
    password: '25f9e794323b453885f5181f1b624d0b',
  },
];

const userToInsert = {
  name: 'Airel Ribeiro',
  email: 'airel.ribeiro@gmail.com',
  password: '123456789',
};

const user = {
  id: 8,
  name: 'Airel Ribeiro',
  email: 'airel.ribeiro@gmail.com',
  password: '25f9e794323b453885f5181f1b624d0b',
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo4LCJuYW1lIjoiQWlyZWwgUmliZWlybyIsImVtYWlsIjoiYWlyZWwucmliZWlyb0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjI1ZjllNzk0MzIzYjQ1Mzg4NWY1MTgxZjFiNjI0ZDBiIn0sImlhdCI6MTY2ODc4NTQ5MywiZXhwIjoxNjY5MzkwMjkzfQ.Lvaz0Gxkj21sIzQ8tPMtkABgqVBgX1uat8BMhEDSsJQ';

module.exports = {
  userToInsert,
  recoverdUser,
  user,
  token,
};
