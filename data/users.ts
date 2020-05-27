import { User } from "../models/index.ts";
import { v4 } from "../deps/index.ts";

console.log(`users created successfully at ${new Date().toLocaleTimeString()}`);

export const users: Map<string, User> = new Map();
let id: string;
id = v4.generate();
users.set(
  id,
  {
    id,
    username: "user1",
    email: "usr1@mail.com",
    password: "pwd1",
  },
);
id = v4.generate();
users.set(
  id,
  {
    id,
    username: "user1",
    email: "usr1@mail.com",
    password: "pwd1",
  },
);
id = v4.generate();
users.set(
  id,
  {
    id,
    username: "user2",
    email: "usr2@mail.com",
    password: "pwd2",
  },
);
id = v4.generate();
users.set(
  id,
  {
    id,
    username: "user3",
    email: "usr3@mail.com",
    password: "pwd3",
  },
);
id = v4.generate();
users.set(
  id,
  {
    id,
    username: "user4",
    email: "usr4@mail.com",
    password: "pwd4",
  },
);
id = v4.generate();
users.set(
  id,
  {
    id,
    username: "user5",
    email: "usr5@mail.com",
    password: "pwd5",
  },
);
id = v4.generate();
users.set(
  id,
  {
    id,
    username: "user6",
    email: "usr6@mail.com",
    password: "pwd6",
  },
);
id = v4.generate();
users.set(
  id,
  {
    id,
    username: "user7",
    email: "usr7@mail.com",
    password: "pwd7",
  },
);
