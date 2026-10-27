import { pokemonsServices } from '../services/pokemons.services.js';

class PokemonsController {
  async getall(_req, res) {
    try {
      return res.json(await pokemonsServices.getall());
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao buscar Pokémons.' });
    }
  }

  async getById(req, res) {
    try {
      const pokemon = await pokemonsServices.getById(req.params.id);
      if (!pokemon) return res.status(404).json({ erro: 'Pokémon não encontrado.' });
      return res.json(pokemon);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao buscar Pokémon.' });
    }
  }

  async create(req, res) {
    try {
      return res.status(201).json(await pokemonsServices.create(req.body));
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao cadastrar Pokémon.' });
    }
  }

  async update(req, res) {
    try {
      const pokemon = await pokemonsServices.update(req.params.id, req.body);
      if (!pokemon) return res.status(404).json({ erro: 'Pokémon não encontrado.' });
      return res.json(pokemon);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao atualizar Pokémon.' });
    }
  }

  async delete(req, res) {
    try {
      const pokemon = await pokemonsServices.delete(req.params.id);
      if (!pokemon) return res.status(404).json({ erro: 'Pokémon não encontrado.' });
      return res.json(pokemon);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao excluir Pokémon.' });
    }
  }

}

export const PokemonsController = new PokemonsController();