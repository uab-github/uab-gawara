import axios from 'axios'

export default axios.create({
  headers: {
    common: {
      'Accept': 'application/json, */*',
      'Access-Control-Allow-Origin': "*"
    }
  },
  baseURL: 'https://run.mocky.io/v3'
  // baseURL: 'http://webapi.uatuab.com:81/API/Wallet'
})
