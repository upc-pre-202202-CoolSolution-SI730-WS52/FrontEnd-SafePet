<template>
  <div class="appointment-container">
    <h1>Appointments</h1>
    <br />
    <div class="btn">
      <pv-button
        @click="$router.push('/appointments')"
        label="Done"
      ></pv-button>
      <pv-button
        @click="$router.push('/appointments')"
        label="Incoming"
        class="p-button-outlined"
      ></pv-button>
    </div>

    <div class="container-body">
      <pv-card
        class="card"
        v-for="appointment in appointments"
        v-bind:key="appointment.id"
      >
        <template #content>
          <div class="body-content">
            <div class="container-body_image">
              <img
                alt=""
                src="data:image/jpeg;base64,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"
              />
            </div>

            <div class="container-body_text">
              <p>Appointment # {{ appointment.number }}</p>
              <p>Vet. {{ appointment.veterinarianName }}</p>
              <br />
              <div class="body-text_bottom">
                <p>Date: {{ appointment.date }}</p>
                <a href="">Add Review</a>
              </div>
            </div>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import { AppointmentsServices } from "../services/appointments.services.js";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "appointments",

  data() {
    return {
      appointments: null,
      currentUser: 1,
    };
  },
  created() {
    new AppointmentsServices()
      .getAppointmentsByField("petOwnerId", this.currentUser)
      .then((response) => {
        this.appointments = response.data;
      });
  },
};
</script>

<style scoped>
.appointment-container {
  width: 97%;
  height: 100%;
  border-radius: 20px;
  padding: 16px;
  margin-top: 20px;
  margin-left: 10px;
  background: #f5f5f5;
}

.btn {
  display: flex;
  gap: 25px;
}

pv-button {
  background-color: #005320;
  margin-bottom: 50px;
}

.container-body {
  margin-top: 20px;
}

.card {
  border-radius: 20px;
  width: 500px;
  height: 150px;
  margin-bottom: 10px;
}

.body-content {
  display: flex;
  gap: 50px;
}

.container-body_image img {
  width: 98px;
  height: 97px;
  border-radius: 50%;
}

.body-text_bottom {
  display: flex;
  gap: 100px;
}

a {
  color: #00a741;
}
</style>
