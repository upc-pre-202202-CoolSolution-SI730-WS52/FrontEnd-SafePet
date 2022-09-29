import http from "../../shared/services/http-common";

export class AppointmentsServices {
    getAppointments = () => {
        return http.get("/appointments");
    };
}