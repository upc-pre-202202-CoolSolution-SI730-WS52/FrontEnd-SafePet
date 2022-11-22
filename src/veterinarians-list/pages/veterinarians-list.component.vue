<template>
  <div class="w-full h-screen">
    <navigation-component></navigation-component>
    <div class="row flex">
      <div class="col-2">
        <menu-bar-pet-owner-component></menu-bar-pet-owner-component>
      </div>
      <div class="col-10 ">

        <div class="vets-container">
          <div class="container-header">
            <h1>Veterinarians</h1>
            <div class="col-12 md:col-4">
              <div class="p-inputgroup">
                <pv-button label="Search" @click="getPat()"></pv-button>
                <pv-input-text v-model="vetSearch" placeholder="Search veterinary"></pv-input-text>
              </div>
            </div>
          </div>


          <div class="container-body" v-for="vet in veterinarians" v-bind:key="vet.id">
            <pv-card class="card" @click="$router.push(`/vets-profile/${vet.id}`)" >}
              <template #content>
                <div class="body-content">
                  <div class="container-body_image">
                    <img :src="vet.photoUrl" :alt="vet.name" />
                  </div>

                  <div class="container-body_text">
                    <h2>Vet. {{ vet.name }}</h2>
                    <p>Appointments: {{vet.appointmentsQuantity}}</p>
                    <p>Score: {{ vet.score }} <i class="pi pi-star-fill" ></i></p>

                  </div>
                </div>
              </template>
            </pv-card>
          </div>
        </div>

      </div>
    </div>
  </div>



</template>

<script>

import {VeterinariansServices} from "../services/veterinarians.services";
import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenuBarPetOwnerComponent from "../../shared/pages/menubar-pet-owners.component.vue";

export default {
  name: "veterinarians-list",
  components: {MenuBarPetOwnerComponent, NavigationComponent},
  data() {
    return {
      veterinarians: null,
      vetSearch: "",
    };
  },
  created() {
    new VeterinariansServices()
        .getVeterinarians()
        .then((response) => {
          this.veterinarians = response.data;
        });
  },
  methods:{

    getPat( veterinariansFiltered=[], found = false) {

      for(let i = 0; i < this.veterinarians.length; i++) {
        if(this.veterinarians[i].name.includes(this.vetSearch) ||
            this.veterinarians[i].name.includes(this.vetSearch)){
          veterinariansFiltered.push(this.veterinarians[i]);
          found = true;
        }
      }

      if(found && this.vetSearch!=="") {
        this.veterinarians = veterinariansFiltered;
      } else{
        new VeterinariansServices()
            .getVeterinarians()
            .then((response) => {
              this.veterinarians = response.data;
            });
      }



    }
  }
}
</script>

<style scoped>

h1{
  font-size: 30px;
}

h2{
  font-size:20px;
}

.vets-container {
  width: 97%;
  height: 100%;
  border-radius: 20px;
  padding: 16px;
  margin-top: 20px;
  margin-left: 10px;
  background: #f5f5f5;
}

.container-header{
  margin-left: 20px;
}

.container-body{
  margin-left: 20px;
}

.container-body_text{
  height: 500px;
}
.btn {
  display: flex;
  gap: 25px;
}

.p-inputgroup{
  margin-top:10px;
}

pv-button {
  background-color: #005320;
  margin-bottom: 50px;

}

.container-body. {
  margin-top: 20px;
}

.card {
  border-radius: 20px;
  width: 500px;
  height: 160px;
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

i{
font-size: 1rem;
}
</style>