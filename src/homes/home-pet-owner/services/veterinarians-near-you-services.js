import http from "../../../shared/services/http-common";

export class VeterinariansNearYouServices {

    getVeterinariansNearYou=()=>{
        return http.get("/veterinariansnearyou")
    }


}
