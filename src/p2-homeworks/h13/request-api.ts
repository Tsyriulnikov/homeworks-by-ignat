import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/',
    })

// api
export const requestAPI = {

        createSuccess(check:boolean) {
            return instance.post('test', {success:check});
    },
}
