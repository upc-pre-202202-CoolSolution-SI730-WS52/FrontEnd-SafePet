import http from "../../shared/services/http-common";

export class VeterinariansServices {

    getVeterinarians = () => {
        return http.get("/vets");
    };

    getVeterinarianById = (id) => {
        return http.get(`/vets/${id}`);
    };


    getVeterinariansByField = (field, value) => {
        return http.get(`/vets?${field}=${value}`);
    };
}
