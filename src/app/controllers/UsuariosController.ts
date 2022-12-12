import { Request, Response, NextFunction } from "express";
import { client } from "../..";

export const GetOne = async (req: Request, res: Response) => {
  try {
    const { rows } = await client.query("SELECT * FROM usuarios");

    res.status(200).json(rows);
  } catch (error) {
    console.log(error);
  }
};

export const AddOne = async (req: Request, res: Response) => {
  const { nome, senha, email } = req.body;
  try {
    const usuarioInserido = await client.query({
      text: "INSERT INTO usuarios(nome, senha, email) VALUES($1, $2, $3)",
      values: [nome, senha, email],
    });
    console.log(usuarioInserido);

    res.status(200).json(usuarioInserido);
  } catch (error) {
    console.log(error);
  }
};
