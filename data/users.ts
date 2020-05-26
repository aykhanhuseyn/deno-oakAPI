import { User } from "../models";
import { v4 } from "../deps";

export const users: Map<number, User> = new Map([
  [1, { id: v4.generate(), username: "user1", email: "usr1@mail.com", password: "pwd1" }],
  [2, { id: v4.generate(), username: "user2", email: "usr2@mail.com", password: "pwd2" }],
  [3, { id: v4.generate(), username: "user3", email: "usr3@mail.com", password: "pwd3" }],
  [4, { id: v4.generate(), username: "user4", email: "usr4@mail.com", password: "pwd4" }],
  [5, { id: v4.generate(), username: "user5", email: "usr5@mail.com", password: "pwd5" }],
  [6, { id: v4.generate(), username: "user6", email: "usr6@mail.com", password: "pwd6" }],
  [7, { id: v4.generate(), username: "user7", email: "usr7@mail.com", password: "pwd7" }],
]);
