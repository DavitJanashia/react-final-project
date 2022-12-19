import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export default {
    get: async (url) => {
        const response = await instance.get(url)
        return response.data;
    },
    del: async (id) => {
        return await instance.delete(id)
    },
    add: async (url, data) => {
        await instance.post(url, data, {
            headers: {
                'Content-type': 'application/json'
            }
        })
    },
    update: async (url, data) => {
        await instance.put(url, data, {
            headers: {
                'Content-type': 'application/json'
            }
        })
    }
}

