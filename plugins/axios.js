import axios from 'axios'

export default axios.create({
  headers: {
    common: {
      'Accept': 'application/json, */*',
      'Access-Control-Allow-Origin': "*"
    }
  },
  baseURL: 'https://run.mocky.io/v3'
})
