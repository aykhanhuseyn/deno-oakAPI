import { Router } from "../deps/index.ts";
import { ERoutes } from "../enums/index.ts";
import { userController } from "../controllers/index.ts";

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = userController;

export const API_Version = "/api/v1/";

const router = new Router();
router
  .get(`${API_Version}${ERoutes.Home}`, ({ response }: { response: any }) => {
    response.body = "Welcome to Deno OAK API!";
    response.status = 200;
  })
  .get(`${API_Version}${ERoutes.GetUsers}`, getUsers)
  .get(`${API_Version}${ERoutes.GetUserById}`, getUserById)
  .post(`${API_Version}${ERoutes.CreateUser}`, createUser)
  .patch(`${API_Version}${ERoutes.UpdateUser}`, updateUser)
  .delete(`${API_Version}${ERoutes.DeleteUser}`, deleteUser);

export default router;
