//It ain't used in all the project, but it will be used in this file
import http from "../../shared/services/http-common";
export class ClientsService {
    getClients = () => {
        return http.get("/clients");
    };
    getClientById = (id) => {
        return http.get(`/clients/${id}`);
    };
}