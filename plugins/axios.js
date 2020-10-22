import axios from 'axios'

export default axios.create({
  headers: {
    common: {
      'Accept': 'application/json, */*,text/plain',
      // 'Access-Control-Allow-Origin': "*",
      // 'Access-Control-Allow-Headers': "Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin",
    }
  },
  // baseURL: 'https://run.mocky.io/v3'
  baseURL: 'http://webapi.uatuab.com/API/Wallet'
})
