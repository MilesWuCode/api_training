import StarWarsRepository from '~/repositories/StarWarsRepository'
import MarvelRepository from '~/repositories/MarvelRepository'

export default ($axios) => ({
  starwars: StarWarsRepository($axios),
  marvel: MarvelRepository($axios)
})
