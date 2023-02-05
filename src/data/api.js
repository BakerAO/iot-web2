import axios from 'axios'

// let baseURL = 'http://api.bakerao.site'
let baseURL = 'http://10.0.0.196:8081'
// if (window.location.hostname === 'localhost') {
//   baseURL = 'http://10.0.0.196:8081'
// }

export default axios.create({ baseURL })
