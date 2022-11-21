import http from "@/shared/services/http-common";

export class ProfileServices{
    getProfile=()=>{
        return http.get("/profiles",);
    };
}