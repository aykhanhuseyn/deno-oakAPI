import { users } from "../data/index.ts";
import { v4 } from "../deps/index.ts";
import { UserCreate, User, UserPatch } from "../models/index.ts";

/**
 * @description         Get all users 
 * @requires            users from data 
 * @param               { response } 
 * @route               /api/v1/users/ 
 * @method              GET 
 */
export const getUsers = ({ response }: { response: any }) => {
  response.body = Array.from(users.values());
  response.status = 200;
};

/**
 * @description         Get single users by ID 
 * @requires            users from data 
 * @param               { response, params } 
 * @route               /api/v1/users/:id 
 * @method              GET 
 */
export const getUserById = (
  { response, params }: { response: any; params: { id: string } },
) => {
  if (params && v4.validate(params.id) && users.has(params.id)) {
    console.log("prm", params);
    response.body = users.get(params.id);
    response.status = 200;
  } else {
    response.body = {
      message:
        "ID you have sent is not correct. Please, check id and try again.",
    };
    response.status = 404;
  }
};

/**
 * @description         Create new user 
 * @requires            users from data 
 *                      { v4 } uuid generator validator from deps 
 * @param               { request, response } 
 * @route               /api/v1/users/ 
 * @method              POST 
 * @returns             new user 
 */
export const createUser = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  let requestUser: UserCreate = body.value;
  const id = v4.generate();
  const newUser: User = { id, ...requestUser };
  users.set(id, newUser);
  response.body = newUser;
  response.status = 201; //created
};

/**
 * @description         update new user 
 * @requires            users from data 
 *                      { v4 } uuid generator validator from deps 
 * @param               { params, request, response } 
 * @route               /api/v1/users/:id 
 * @method              PATCH 
 * @returns             updated user 
 */
export const updateUser = async (
  { params, request, response }: { params: any; request: any; response: any },
) => {
  if (params && v4.validate(params?.id) && users.has(params?.id)) {
    const body = await request.body();
    const requestUser: UserPatch = body.value;
    let userToUpdate = users.get(params.id)!;
    userToUpdate = {
      ...userToUpdate,
      ...requestUser,
      id: userToUpdate.id,
      username: userToUpdate.username,
    };
    users.set(params.id, userToUpdate);
    response.body = userToUpdate;
    response.status = 200;
  } else {
    response.body = null;
    response.status = 204; //no content
  }
};

/**
 * @description         delete user 
 * @requires            users from data 
 *                      { v4 } uuid generator validator from deps 
 * @param               { params, response } 
 * @route               /api/v1/users/:id 
 * @method              DELETE 
 * @returns             users 
 */
export const deleteUser = (
  { params, response }: { params: any; response: any },
) => {
  let status = v4.validate(params?.id) && users.delete(params?.id);
  response.status = status ? 200 : 404;
  response.body = Array.from(users.values());
};
