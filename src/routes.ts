import { Router, Request, Response, NextFunction } from "express";
import usuariosRoutes from "./app/routes/UsuariosRoutes";

const routes = Router();

routes.use(usuariosRoutes);

export default routes;
