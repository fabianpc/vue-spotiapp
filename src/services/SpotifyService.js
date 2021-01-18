import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Authorization': 'Bearer BQBOYgJlIwSKfYuqOsEKpl_cekPdPqrb81-9hMbIYlIL21zJ2rkpYnBHckbS44MIIAG2UhoAUXnz_6fun_g'
    }
})

export default {
    getNewReleases() {
        return apiClient.get('/browse/new-releases?limit=20')
    }
}