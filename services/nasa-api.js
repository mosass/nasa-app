import { URL, URLSearchParams } from 'url'
import config from './nasa-config'


const ApodApi = async () => {
    let url = new URL(config.baseUrl + '/planetary/apod')
    let params = {
        api_key: config.apiKey,
        thumbs: true,
        count: 5
    }
    url.search = new URLSearchParams(params).toString();

    let response = await fetch(url)
    return await response.json()
}

export default {
    ApodApi
}