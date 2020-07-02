import StarWarsRepository from '~/repositories/StarWarsRepository'

export default ($axios) => ({
  starwars: StarWarsRepository($axios)
})
