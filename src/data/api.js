import axios from 'axios'

let baseURL = 'http://api.bakerao.site'
// let baseURL = 'http://localhost:8081'

export default axios.create({ baseURL })
