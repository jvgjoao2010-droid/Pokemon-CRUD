import { Router } from 'express';

import { pokemonsController } from '../controllers/Pokemon.controller';

export const pokemonsRouter = Router();

pokemonsRouter.get('/', pokemonsController.getall);

pokemonsRouter.get('/:id',pokemonsController.getById);

pokemonsRouter.post('/',pokemonsController.create);

pokemonsRouter.put('/:id',pokemonsController.update);

pokemonsRouter.delete('/:id', pokemonsController.delete);