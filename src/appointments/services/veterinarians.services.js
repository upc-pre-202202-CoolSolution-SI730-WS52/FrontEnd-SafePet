import http from "../../shared/services/http-common";

export class VeterinariansServices {

    getVeterinarians = () => {
        return http.get("/veterinarians");
    };

    getVeterinariansByField = (field, value) => {
        return http.get(`/veterinarians?${field}=${value}`);
    };
}
