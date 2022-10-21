import http from "../../shared/services/http-common";

export class AppointmentsServices {
  getAppointments = () => {
    return http.get("/appointments");
  };

  getAppointmentsByField = (field, value) => {
    return http.get(`/appointments?${field}=${value}`);
  };
}
