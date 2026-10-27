import express from "express";
import pokemonService from "../services/Pokemon.service.js";


class PokemonController{
async getTudo (res)  {
    const pokemons = await pokemonService.getTudo();
    return res.json(pokemons);
}
async  create (req, res)  {
    const pokemons = await pokemonService.create(req.body);
    return res.status(201).json(pokemons);
}

async update (req, res)  {
  try {
    const pokemons = await pokemonService.update(req.params.id, req.body);
    if (!pokemons) return res.status(404).json({ erro: 'Pokémon não encontrado.' });
    return res.json(pokemons);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao atualizar Pokémon.' });
  }
}


 async delete (req, res)  {
  try {
    const pokemons = pokemonRouter.delete(req.params.id);
    if (!pokemons) return res.status(404).json({ erro: 'Pokémon não encontrado.' });
    return res.json(pokemons);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao excluir Pokémon.' });
  }
}
}

export const PokemonController =  new PokemonController ();


