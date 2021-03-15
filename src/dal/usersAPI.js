import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"85d6fce6-242d-4f5c-b181-97eb621bd722"
    }
})
 export const usersAPI = {
    getProfileApi(userId){
        console.log("Obsolete method. Use profileAPI")
        return profileAPI.getProfileApi(userId)
    },

    getUsersAPI(pageNumber=1,usersPerPage=5){
        return  instance.get(`users?page=${pageNumber}&count=${usersPerPage}`).then(response=>{return response.data});
    },

    deleteFollowerAPI(userId){
        return  instance.delete(`follow/${userId}`).then(response => response.data)
    },
    postFollowerAPI(userId){
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfileApi(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status})
    }

}

export const authAPI = {
    
    getAuthMe(){
        return instance.get(`auth/me`).then(response => response.data);
    }
    }


 



