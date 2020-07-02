import md5 from 'md5'

const resource = 'http://gateway.marvel.com/v1/public/characters'
const apikey = '9934ecbca242ea957f15ac87df1394ee'
const privateKey = 'd6f26f7d6c75aaeddf60f1ecd2fde57d556832e8'

export default ($axios) => ({
  all(data) {
    const ts = Date.now()

    const hash = md5(ts + privateKey + apikey)

    const name = 'Spider-Man'

    return $axios.get(`${resource}`, {
      params: {
        ...data,
        name,
        ts,
        apikey,
        hash
      }
    })
  }

  // show(id) {
  //   return $axios.get(`${resource}/people/${id}`)
  // }

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
