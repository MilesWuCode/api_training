const resource = 'https://swapi.dev/api'
export default ($axios) => ({
  all(data) {
    return $axios.get(`${resource}/people/?page=${data.page}`)
  },

  show(id) {
    return $axios.get(`${resource}/people/${id}`)
  }

  // create(payload) {
  //   return $axios.post(`${resource}`, payload)
  // },

  // update(id, payload) {
  //   return $axios.post(`${resource}/${id}`, payload)
  // },

  // delete(id) {
  //   return $axios.delete(`${resource}/${id}`)
  // }
})
