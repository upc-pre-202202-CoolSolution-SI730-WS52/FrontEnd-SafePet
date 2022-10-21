<template>
  <pv-button class="back" @click="$router.push(`/clients`)">Back</pv-button>
  <div class="big-container">
    <div class="big-container-c">
      <div class="card">
        <img :src="item.photoUrl" alt="user photo" style="width:100%">
        <div class="container">
          <h4><b>{{ item.name }}</b></h4>
          <p>Pet: {{ item.petName }}</p>
        </div>
      </div>
      <div class="card2">
        <div class="container">
          <h1 style="margin-bottom:10px; text-align:center"><b>Date: 12-08-2022</b></h1>
          <h1><b>Observations</b></h1>
          <hr class="solid">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec lorem nulla, sollicitudin eget tellus et, volutpat
            tincidunt tellus. Donec bibendum, massa a sollicitudin
            dapibus, dolor nisl accumsan ipsum, in pellentesque eros
            nibh ac purus. Curabitur placerat maximus neque, sed
            fermentum velit posuere pretium.</p>
          <h1 style="margin-top:30px"><b>Prescription</b></h1>
          <hr class="solid">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec lorem nulla, sollicitudin eget tellus et, volutpat
            tincidunt tellus. Donec bibendum, massa a sollicitudin
            dapibus, dolor nisl accumsan ipsum, in pellentesque eros
            nibh ac purus. Curabitur placerat maximus neque, sed
            fermentum velit posuere pretium.</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ClientsService } from "@/clients/services/clients.service";

export default {
  name: "ViewClientComponent",
  components: {},
  data() {
    return {
      item: {
        name: "",
        petName: "",
        photoUrl: "",
        checkups: [{}]
      },
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getInformation(this.id);
  },
  methods: {
    getInformation() {
      new ClientsService().getClientById(this.id)
      .then((response) => {
        this.item = response.data[0];
        console.log(response.data);
      });
    }
  }
};
</script>

<style scoped>
hr.solid {
  border-top: 3px solid #bbb;
  border-color: black;
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
}
.back {
  margin: 20px;
}
</style>