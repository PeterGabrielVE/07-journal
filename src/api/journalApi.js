

import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-cursos-9c1f2-default-rtdb.firebaseio.com'
})

export default journalApi;