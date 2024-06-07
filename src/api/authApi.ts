
import api from './index'


export default {

    userRegister(data) {
        return api.post('Api/User/userRegister',data)
    },

    loginUser(data)  {
       return  api.post('Api/User/LogIn', data)
    },

    getUserFromToken(token : string) {
        return api.get(`Api/User/getUserFromToken/${token}`)
    },
    getUserRoles(userId : string) {
        return api.get(`Api/User/getUserRoles/${userId}`)
    },
    getAllUsers()  {
        return api.get('Api/User/getAllUsers')
    },
    getUserForId(id: String)  {
        return api.get(`Api/User/getUserForId/${id}`)
    },
    updateUser(data) {
        return api.post('Api/User/updateUser',data)
    },
    removeUser(data) {
        return api.post('Api/User/removeUser',data)
    }
}


