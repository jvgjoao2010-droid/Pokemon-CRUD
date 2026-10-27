import express from "express";
import treinadorService from "../services/treinador.service.js";

class treinadorController {
async getTudo (res)  {
    const treinador = await treinadorService.getTudo();
    return res.json(treinador);
}

async create (req, res)  {
    const treinador = await treinadorService.create(req.body);
    return res.status(201).json(treinador);
}

async update (req, res)  {
  try {
    const treinador = await treinadorService.update(req.params.id, req.body);
    if (!treinador) return res.status(404).json({ erro: 'treinador não encontrado.' });
    return res.json(treinador);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao atualizar treinador.' });
  }
}
async delete (req, res)  {
  try {
    const treinador = treinadorRouter.delete(req.params.id);
    if (!treinador) return res.status(404).json({ erro: 'treinador não encontrado.' });
    return res.json(treinador);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao excluir treinador.' });
  }
}

}





export const treinadorController =  new treinadorController ();