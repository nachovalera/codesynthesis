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
        const { data } = await axios.get(this.path)
        return data.meetups
    }
}

export {
    MeetupApi
}

// export const fetchMeetups = () =>
//     fetch('http://localhost:3000/api/meetups')
//         .then(res => res.json());