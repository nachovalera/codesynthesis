import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

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