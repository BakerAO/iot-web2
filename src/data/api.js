import axios from 'axios'

let baseURL = 'http://api.tidoba.com'
// if (window.location.hostname === 'localhost') {
//   baseURL = 'http://localhost:8081'
// }

export default axios.create({ baseURL })
