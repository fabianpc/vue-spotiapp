import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Authorization': 'Bearer BQCVN-2FQ49FrpLfxyWGwEJGkM9UHDBSiCFThGL4nRD_wRyL9yVFe9u5sXXvqw_YhWMQ3zOQOxlMzAL63FU'
    }
})

export default {
    getNewReleases() {
        return apiClient.get('/browse/new-releases?limit=20')
    }
}