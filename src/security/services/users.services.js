import http from "../../shared/services/http-common";

export class UsersServices {


    SignIn = (username,password) => {
        return http.post("/users/sign-in",{
            "username":username,
            "password":password,
        });
    };

    getUsers = () => {
        return http.get("/users");
    };

    getUserById = (id) => {
        return http.get(`/users/${id}`);
    };


    getUserByField = (field, value) => {
        return http.get(`/users/${field}/${value}`);
    };

    createUser=(name,birthday,email,appointmentsQuantity,score,phone,photoUrl,password,role)=>{
        return http.post("/users/sign-up", {
            "name": name,
            "birthday": birthday,
            "appointmentsQuantity":appointmentsQuantity,
            "score":score,
            "phone":phone,
            "photoUrl":photoUrl,
            "email": email,
            "username":email,
            "password":password,
            "role":role
        })
    }
}