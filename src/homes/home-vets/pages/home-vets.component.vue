<template>


  <div class="w-full h-screen">
    <navigation-component></navigation-component>
    <div class="row flex">
      <div class="col-2">
        <menubar-component></menubar-component>
      </div>
      <div class="col-10 ">
        <div class="big-container pl-5 mt-3">
          <div class="container">
            <div id="Appointments">
              <h1 class="container-title" @click="$router.push(`/appointments`)">
                Appointments
              </h1>
              <div v-for="appo in appointments" :key="appo.id">
                <div class="card-apo">
                  <div class="info">
                    <h1>Appointment #{{ appo.number }}</h1>
                    <h2>Vet. {{ appo.petOwnerName }}</h2>
                    <h2 class="date">Date: {{ appo.date }}</h2>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-clients">
              <h1 class="container-title" @click="$router.push(`/clients`)">
                My Clients
              </h1>
              <div v-for="client in clients" :key="client.id">
                <div class="card" @click="$router.push(`/clients/${client.id}`)" >
                  <div class="product">
                    <h1>{{ client.name }}</h1>
                    <p>{{ client.petName }}</p>
                  </div>
                  <div class="images">
                    <img  :src="client.photoUrl" v-bind:alt="client.name" />
                  </div>
                </div>
              </div>
            </div>


            <div class="most-purchased-products">
              <h1 class="container-title" @click="$router.push(`/products`)">
                Most purchased products
              </h1>
              <div v-for="product in most_purchased_products" :key="product.id">
                <div class="card" @click="$router.push(`/products/${product.category}/${product.productId}`)" >
                  <div class="product">
                    <h1>{{ product.name }}</h1>
                    <p>{{ product.description }}</p>
                    <h2>S/. {{ product.price }}</h2>
                  </div>
                  <div class="images">
                    <img  :src="product.image" v-bind:alt="product.name" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="container">
            <div id="veterinarians-near-you">
              <h1 class="container-title">Messages</h1>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import {AppointmentsServices} from "../../../appointments/services/appointments.services";
import {MostPurchasedProductsServices} from "../../home-pet-owner/services/most-purchased-products-services";
import {ClientsService} from "../../../clients/services/clients.service";

import NavigationComponent from "../../../shared/pages/navigation.component.vue";
import MenubarComponent from "../../../shared/pages/menubar.component.vue";


export default {
  name: "home-vets.component",
  components: { NavigationComponent, MenubarComponent },
  data() {
    return {
      appointments: null,
      most_purchased_products: null,
      clients: null,
      currentUser: 0,
      appointmentIndexer: 0,



    };
  },
  created() {
    this.currentUser=Number(sessionStorage.getItem("userId"));
    new AppointmentsServices()
        .getAppointmentsByField("veterinarianId", this.currentUser)
        .then((response) => {
          this.appointments = response.data;
        });
    new MostPurchasedProductsServices()
        .getMostPurchasedProducts()
        .then((response) => {
          this.most_purchased_products = response.data;
        });
    new ClientsService()
        .getClients()
        .then((response) => {
          this.clients = response.data;
        });
  },
}
</script>

<style scoped>
* {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 20px;
}

h1 {
  -webkit-user-select: none;
}

h1:hover {
  cursor: pointer;
}

.big-container {
  width: 100%;
  height: 98%;
  border-style: groove;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 16px;
}

.card {
  display: grid;
  font-family: "Lato", sans-serif;
  position: relative;
  width: 300px;
  height: 100px;
  background: #fdfdfe;
  box-shadow: 5px 5px 15px #7e7c7c;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
}

.card-apo {
  display: grid;
  font-family: "Lato", sans-serif;
  position: relative;
  width: 350px;
  height: 80px;
  background: #fdfdfe;
  box-shadow: 5px 5px 15px #7e7c7c;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
}

p {
  font-size: 10px;
  color: #676767;
}

h1 {
  font-size: 15px;
  margin-top: 3px;
}

h2 {
  font-size: 15px;
  margin-top: 1px;
}

img {
  margin-top: 5px;
  width: 90px;
  margin-left: 40px;
}

.images-vet img {
  margin-top: 10px;
  margin-left: 40px;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
}

.product {
  position: absolute;
  width: 40%;
  height: 100%;
  top: 10%;
  left: 55%;
}

.info {
  position: absolute;
  top: 10%;
  left: 5%;
}

.info h2 {
  font-weight: lighter;
}

.date {
  position: absolute;
  top: 20px;
  margin-left: 180px;
  width: 450px;
}

.container {
  display: flex;
  margin-top: 2px;
  margin-left: 20px;
}
.container-title {
  font-size: 25px;
}
.my-clients{
  margin-left: 100px;
}

.most-purchased-products {
  margin-left: 100px;
}

.maps-location {
  margin-top: 20px;
  margin-left: 300px;
}
@media (max-width: 768px) {
  .container {
    display: grid;
  }
  .most-purchased-products {
    margin-left: 10px;
  }
  .maps-location {
    margin-top: 15px;
    margin-left: 10px;
  }
  .maps-location iframe {
    width: 410px;
  }
}
</style>