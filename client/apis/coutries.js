import request from 'superagent'

export function getCountries() {
  return request.get('/api/v1/countries').then((result) => {
    return result.body
  })
}

export function addCountry(name) {
  return request
    .post(`/api/v1/countries`)
    .send({ name })
    .then((res) => res.body[0])
}

export function deleteCountry(id) {
  return request.delete(`/api/v1/countries/${id}`).then(() => {})
}
