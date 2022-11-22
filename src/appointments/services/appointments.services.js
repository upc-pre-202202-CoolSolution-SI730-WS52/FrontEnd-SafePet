import http from "../../shared/services/http-common";

export class AppointmentsServices {
  getAppointments = () => {
    return http.get("/appointments");
  };

  getAppointmentById = (id) => {
    return http.get(`/appointments/${id}`);
  };

  getAppointmentByField = (field, value) => {
    return http.get(`/appointments/${field}/${value}`);
  };

  createAppointment=(petOwnerId, petOwnerName,veterinarianId, veterinarianName, date, image)=>{
    return http.post("/appointments", {
      "petOwnerId": petOwnerId,
      "petOwnerName": petOwnerName,
      "veterinarianId": veterinarianId,
      "veterinarianName": veterinarianName,
      "date": date,
      "image": image
    })
  }



}
