import axios from 'axios'

export const getServerResponseUsingAsync = async () => {
  let { data } = await axios.post('/test', {
    test: 'World!'
  })
  return data
}

export const getServerResponseUsingPromise = async () => {
  return axios.post('/test', {
    test: 'World!'
  })
}
