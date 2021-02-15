import config from './nasa-config'


const apod = async ({ start, end, count } = { count: 5}) => {
    let url = config.baseUrl + '/planetary/apod?'

    let params = {
        api_key: config.apiKey,
        thumbs: true,
    }

    if(!!start) params['start_date'] = start
    if(!!end) params['end_date'] = end
    if(!start && !end) params['count'] = count

    for(let k in params) {
        url += k+'='+params[k]+'&'
    }
    
    let response = await fetch(url)
    return await response.json()
}

export default {
    apod
}