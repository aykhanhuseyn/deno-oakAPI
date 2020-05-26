import { Router } from "../deps";
import { ERoutes } from "../enums";
import { userController } from "../controllers";

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = userController;

const router = new Router();
router
  .get(`/api/v1/${ERoutes.Home}`, ({ response }) => {
    response.body = "Welcome to Deno OAK API!";
    response.status = 200;
  })
  .get(`/api/v1/${ERoutes.GetUsers}`, getUsers)
  .get(`/api/v1/${ERoutes.GetUserById}`, getUserById)
  .post(`/api/v1/${ERoutes.CreateUser}`, createUser)
  .patch(`/api/v1/${ERoutes.UpdateUser}`, updateUser)
  .delete(`/api/v1/${ERoutes.DeleteUser}`, deleteUser);

export default router;
