import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"85d6fce6-242d-4f5c-b181-97eb621bd722"
    }
})
 const usersAPI = {
    getProfileApi(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getUsersAPI(pageNumber=1,usersPerPage=5){
        return  instance.get(`users?page=${pageNumber}&count=${usersPerPage}`).then(response=>{return response.data});
    },

    deleteFollowerAPI(userId){
        return  instance.delete(`follow/${userId}`).then(response => response.data)
    },
    postFollowerAPI(userId){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    getAuthMe(){
        return instance.get(`auth/me`).then(response => response.data);
    }


}

export default usersAPI;



