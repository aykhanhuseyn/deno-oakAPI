import { users } from "../data";
import { v4 } from "../deps";
import { UserCreate, User, UserPatch } from "../models";

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
  { response, params }: { response: any; params: any },
) => {
  if (params && v4.validate(params?.id) && users.has(params.id)) {
    response.body = users.get(params.id);
    response.status = 200;
  } else {
    response.body = null;
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
  const requestUser: UserCreate = await request.body;
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
  { params, request, response }: { params: any; request: any; response },
) => {
  if (params && v4.validate(params?.id) && users.has(params?.id)) {
    const requestUser: UserPatch = await request.body;
    let userToUpdate = users.get(params.id);
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
export const deleteUser = ({ params, response }) => {
  let status = v4.validate(params?.id) && users.delete(params?.id);
  response.status = status ? 200 : 404;
  response.body = Array.from(users.values());
};
