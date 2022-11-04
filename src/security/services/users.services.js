import http from "../../shared/services/http-common";

export class UsersServices {

    getUsers = () => {
        return http.get("/users");
    };

    getUserById = (id) => {
        return http.get(`/users/${id}`);
    };


    getUserByField = (field, value) => {
        return http.get(`/users?${field}=${value}`);
    };

    createUser=(email,password, role)=>{
        return http.post("/users", {
            "email": email,
            "password":password,
            "role":role
        })
    }
}