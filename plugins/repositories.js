import createRepository from '~/repositories/Repository.js'

export default (ctx, inject) => {
  inject('repositories', createRepository(ctx.$axios))
}
