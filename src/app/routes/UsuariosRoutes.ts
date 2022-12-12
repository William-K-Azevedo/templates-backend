import { Router } from "express";
import { GetOne, AddOne } from "../controllers/UsuariosController";

const usuariosRouter = Router();

usuariosRouter.get("/", GetOne);
usuariosRouter.post("/", AddOne);

export default usuariosRouter;
