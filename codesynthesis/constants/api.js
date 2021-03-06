import axios from 'axios'
import { Platform } from 'react-native'

let url
if(Platform.OS !== 'ios') {
    url = 'http://192.168.1.103:3000/api'
} else {
    url = 'http://localhost:3000/api'
}
axios.defaults.baseURL = url

const fakeGroupId = '58ee8d2e32d04f08436c6b70'

class MeetupApi {
    constructor() {
        this.groupId = fakeGroupId
        this.path = `/groups/${this.groupId}/meetups`
    }

    async fetchGroupMeetups() {
        try {
            const { data } = await axios.get(this.path)
            return data.meetups
        } catch (e) {
            throw e
        }
    }

    async createGroupMeetups(args) {
        try {
            const res = await axios.post(`${this.path}/new`, { ...args })
            return res
        } catch (e) {
            throw e
        }
    }
}

export {
    MeetupApi
}

class UserApi {
    constructor(){
        this.path = '/users'
    }
    async login(args){
        try {
            const { data } = await axios.post(`${this.path}/auth0`, args)
            return data
        } catch (e) {
            throw e
        }
    }
}

export const User = new UserApi()