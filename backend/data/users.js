import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Bruno",
    email: "bruno@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Doe",
    email: "johndoe@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
