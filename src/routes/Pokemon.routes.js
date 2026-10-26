import express from "express";
import pokemonService from "../service/Pokemon.service.js";

const pokemonRouter = express.Router();

pokemonRouter.get("/", async (res) => {
    const pokemons = await pokemonService.getTudo();
    return res.json(pokemons);
});

pokemonRouter.post("/", async (req, res) => {
    const pokemons = await pokemonService.create(req.body);
    return res.status(201).json(pokemons);
});

pokemonRouter.put('/:id', async (req, res) => {
  try {
    const pokemons = await pokemonService.update(req.params.id, req.body);
    if (!pokemons) return res.status(404).json({ erro: 'Pokémon não encontrado.' });
    return res.json(pokemons);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao atualizar Pokémon.' });
  }
});

pokemonRouter.delete('/:id', async (req, res) => {
  try {
    const pokemons = pokemonRouter.delete(req.params.id);
    if (!pokemons) return res.status(404).json({ erro: 'Pokémon não encontrado.' });
    return res.json(pokemons);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao excluir Pokémon.' });
  }
});

export default pokemonRouter;