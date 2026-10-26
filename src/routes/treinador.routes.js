import express from "express";
import treinadorService from "../service/treinador.service.js";

const treinadorRouter = express.Router();

treinadorRouter.get("/", async (res) => {
    const treinador = await treinadorService.getTudo();
    return res.json(treinador);
});

treinadorRouter.post("/", async (req, res) => {
    const treinador = await treinadorService.create(req.body);
    return res.status(201).json(treinador);
});

treinadorRouter.put('/:id', async (req, res) => {
  try {
    const treinador = await treinadorService.update(req.params.id, req.body);
    if (!treinador) return res.status(404).json({ erro: 'treinador não encontrado.' });
    return res.json(treinador);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao atualizar treinador.' });
  }
});

treinadorRouter.delete('/:id', async (req, res) => {
  try {
    const treinador = treinadorRouter.delete(req.params.id);
    if (!treinador) return res.status(404).json({ erro: 'treinador não encontrado.' });
    return res.json(treinador);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao excluir treinador.' });
  }
});

export default treinadorRouter;