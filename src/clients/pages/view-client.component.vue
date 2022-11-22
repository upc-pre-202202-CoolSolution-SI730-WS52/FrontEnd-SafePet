<template>

  <div class="w-full h-screen">
    <navigation-component></navigation-component>
    <div class="row flex">
      <div class="col-2">
        <menubar-component></menubar-component>
      </div>
      <div class="col-10 ">

        <div class="big-container">
          <pv-button class="back" @click="$router.push(`/clients`)">Back</pv-button>
          <div class="big-container-c">
            <div class="card">
              <img :src="item.photoUrl" alt="user photo" style="width:100%">
              <div class="container">
                <h4><b>{{ item.name }}</b></h4>
                <p>Pet: {{ item.petName }}</p>
              </div>
            </div>
            <div class="card2">
              <div class="container" v-for="check in checkups">
                <hr class="dashed">
                <h1 style="margin-bottom:10px; text-align:center"><b>Date: {{ check.date }}</b></h1>
                <h1><b>Observations</b></h1>
                <hr class="solid">
                <p>{{ check.observation }}</p>
                <h1 style="margin-top:30px"><b>Prescription</b></h1>
                <hr class="solid">
                <p>{{ check.prescription }}</p>
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
import { ChecksService } from "../services/checks.service";
import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenubarComponent from "@/shared/pages/menubar.component.vue";

export default {
  name: "ViewClientComponent",
  components: { NavigationComponent, MenubarComponent },
  data() {
    return {
      item: {
        name: "",
        petName: "",
        photoUrl: ""
      },
      checkups: [],
      check: {
        id: 0,
        clientId: 0,
        date: "",
        obs: "",
        pres: ""
      },
      checksService: null,
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getInformation();
    this.getChecks();
  },
  methods: {
    getInformation() {
      new ClientsService().getClientById(this.id)
      .then((response) => {
        this.item = response.data;
      });
    },
    getChecks() {
      this.checksService = new ChecksService();
      this.checkups = this.checksService.getChecks().then((response) => {
        this.checkups = response.data
          .filter((x => x.clientId == this.id))
          .sort((x, x2) => {
            if (x.date > x2.date) {
              return 1;
            }

            if (x.date < x2.date) {
              return -1;
            }

            return 0;
          });
      })
    }
  }
};
</script>

<style scoped>
hr.solid {
  border-top: 3px solid #bbb;
  border-color: black;
}

hr.dashed {
  border-top: 3px dashed #bbb;
  margin: 20px;
}

.big-container {
  width: 100%;
  height: 100%;
  border-style: groove;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 16px;
}

.big-container-c {
  align-items: center;
  display: flex;
  justify-content: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-top: 8%;
  margin-right: 100px;
  width: 25%;
  text-align: center;
}

.card2 {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-top: 8%;
  height: 25%;
  width: 50%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
  margin: 20px;
}
.back {
  margin: 20px;
}
</style>