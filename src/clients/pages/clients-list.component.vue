<template>

  <div class="w-full h-screen">
    <navigation-component></navigation-component>
    <div class="row flex">
      <div class="col-2">
        <menubar-component></menubar-component>
      </div>
      <div class="col-10 ">
        <div class="clients-container pl-5 mt-3">
          <div class="top-container">
            <label class="top-container-title" for="ProductList"> Clients</label>
            <h3>Select a client </h3>
          </div>

          <div class="cards justify-content-center" v-for="client in clients" style="margin: 24px 0 0 0" v-show="client.vetId===this.currentUser">
            <div class="category-card" >
              <div class="category-card-container">
                <img class="image" :src="client.photoUrl" alt="category" />
              </div>
              <div class="category-card-container ml-3">
                <div class="ml-3">
                  <h1>{{ client.name }}</h1>
                  <h4>{{ client.petName }}</h4>
                </div>
              </div>
              <div class="category-card-container flex justify-content-end mr-6">
                <pv-button label="Add" @click="$router.push(`/clients/${client.id}/add-check`)"></pv-button>
                <pv-button class="p-button-secondary" @click="$router.push(`/clients/${client.id}`)" label="View" style="margin-left: .5em"></pv-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { ClientsService } from "@/clients/services/clients.service";
import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenubarComponent from "@/shared/pages/menubar.component.vue";

export default {
  name: "ClientListComponent",
  components: { NavigationComponent, MenubarComponent },
  data() {
    return {
      currentUser: Number(sessionStorage.getItem("userId")),
      clients: [],
      client: {},
      clientsService: null,
    };
  },
  created() {
    this.clientsService = new ClientsService();
    this.clients = this.clientsService.getClients().then((response) => {
      this.clients = response.data;
    })
  },
  methods: {
  }
};
</script>

<style scoped>
.clients-container {
  width: 100%;
  height: 100%;
  border-style: groove;
  padding: 16px;
  background: #ffffff;
  border-radius: 10px;
}
.top-container {
  /*background: ;*/
  justify-content: space-between;
  align-items: center;
}
.category-card {
  width: 75%;
  display: flex;
  cursor: pointer;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  align-items: center;
}
.category-card-container {
  flex: 1;
}

.image {
  max-width: 200px;
  max-height: 150px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.top-container-title {
  font-size: 32px;
  font-weight: bold;
}
</style>