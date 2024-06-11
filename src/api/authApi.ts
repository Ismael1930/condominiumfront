
import { Login, user, userRegister } from '@/types/authUser'
import api from './index'


export default {

    userRegister(data: userRegister) {
        return api.post('Api/User/userRegister',data)
    },

    loginUser(data : Login)  {
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
    updateUser(data : user) {
        return api.put('Api/User/updateUser',data)
    },
    removeUser(data: user) {
        return api.delete('Api/User/removeUser',{data})
    }
}


