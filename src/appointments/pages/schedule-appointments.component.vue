<template>

  <div class="w-full h-screen">
    <navigation-component></navigation-component>

    <div class="row flex">
      <div class="col-2">
        <menubar-component></menubar-component>
      </div>

      <div class="col-10 ">

        <div class="appointment-container">
          <div>
            <h1><i class="pi pi-angle-left" @click="$router.push(`/vets-profile/${id}`)"></i>Schedule an appointment</h1>
          </div>

          <div class="field col-12 md:col-4">
            <label for="topic">Pet's type </label>
	          <pv-input-text class="text" type="text"  v-model="typePet" />
          </div>

          <div class="date_time">
          <div class="field col-12 md:col-4">
            <label for="icon">Date</label>
            <pv-calendar input="dateFormat" v-model="date" :showIcon="true" dateFormat="dd/mm/yy" />
          </div>

          </div>

          <div class="btn">
          <pv-button @click="addAppointment()" >Save</pv-button>
         </div>
        </div>

      </div>


      </div>
    </div>

</template>

<script>
//import MenubarPetOwnerComponent from "@/shared/pages/menubar-pet-owners.component";
import {VeterinariansServices} from "@/veterinarians-list/services/veterinarians.services";
import {AppointmentsServices} from "@/appointments/services/appointments.services";

import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenubarComponent from "@/shared/pages/menubar.component.vue";


export default {
  name: "schedule-appointments.component",
  components: {NavigationComponent, MenubarComponent },



  data() {
    return {
      id: null,
      currentUser: 1,
      typePet: null,
      veterinary: null,
      veterinariansService: null,
      date: null,
      image: "https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15796.jpg?w=2000",
      appointmentsService: null,
    }
  },

  created() {
    this.id = this.$route.params.id;

    this.veterinariansService= new VeterinariansServices;
    this.appointmentsService= new AppointmentsServices;

    this.veterinariansService.getVeterinarianById(this.id).then((response) => {
      this.veterinary = response.data;
    });

  },


  methods:{
    addAppointment(){
     const formatDate =  new Date(this.date).toLocaleDateString();

      this.appointmentsService.createAppointment(this.currentUser,"Pedro Castillo",this.veterinary.id, this.veterinary.name, formatDate, this.image)
          .then((response) => {
        this.$router.push(`/appointments/${this.id}`);
      });
    }
  }
}
</script>

<style scoped>
pv-button {
  background-color: #005320;
  margin-bottom: 50px;
}

body {
  margin: 0 0;
  background: #0d3c61;
}
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
  justify-content: center;
  text-align: center;
}


.container-body_image img {
  width: 98px;
  height: 97px;
  border-radius: 50%;
}

label {
  margin-right: 5px;
}

.text {
  width: 176%
}

.date_time {
  display: flex;
}
a {
  color: #00a741;
}



.pi-angle-left{

  font-size: 2rem;

}
</style>