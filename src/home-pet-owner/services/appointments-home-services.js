import http from "../../shared/services/http-common";

export class AppointmentsHomeServices {

    getAppointments=()=>{
        return http.get("/appointments_home")
    }

}
