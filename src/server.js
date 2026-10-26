import express from 'express'
import pokemonRouter  from './routes/Pokemon.routes.js'

const server = express()

server.use(express.json())

server.get('/health', (req, res) => {
    res.json({
        status: 'Tá fucionando meu parceiro'
    })
})

server.use('/pokemons', pokemonRouter)

server.listen(3000, () => {
    console.log('ta rodando pae, lá no http://localhost:3000')
})