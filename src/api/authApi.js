
import api from './index'


export default {

    userRegister(data) {
        console.log(data);
        return api.post('Api/User/userRegister',data)
    },

    loginUser(data)  {
       return  api.post('Api/User/LogIn', data)
    },

    getUserFromToken(token) {
        return api.get(`Api/User/getUserFromToken/${token}`)
    },
    getUserRoles(userId) {
        return api.get(`Api/User/getUserRoles/${userId}`)
    },
    getAllUsers()  {
        return api.get('Api/User/getAllUsers')
    }
}


