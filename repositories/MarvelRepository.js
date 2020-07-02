import md5 from 'md5'

const resource = 'http://gateway.marvel.com/v1/public/characters'
const apikey = process.env.MARVEL_APIKEY
const privateKey = process.env.MARVEL_PRIVATEKEY

export default ($axios) => ({
  all(data) {
    const ts = Date.now()

    const hash = md5(ts + privateKey + apikey)

    return $axios.get(`${resource}`, {
      params: {
        ...data,
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
