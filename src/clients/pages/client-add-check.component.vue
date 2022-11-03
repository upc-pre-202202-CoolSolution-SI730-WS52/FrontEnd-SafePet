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
            <div class="form">
              <h1 style="margin-bottom:25px; text-align:center">Add new check-up</h1>
              <div class="f2">
                <label for="date">Date</label>
                <hr class="solid">
                <input type="date" id="date" name="date" required v-model="date2" placeholder="mm/dd/yyyy">
              </div>

              <div class="f1">
                <label for="observation">Observations</label>
                <hr class="solid">
                <input type="text" id="observation" name="observation" required v-model="obs2" placeholder="Write a comment">
              </div>

              <div class="f1">
                <label for="prescription">Prescriptions</label>
                <hr class="solid">
                <input type="text" id="prescription" name="prescription" required v-model="pres2" placeholder="Write a comment">
              </div>

              <pv-button @click="saveCheck">Submit</pv-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { ChecksService } from "../services/checks.service";
import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenubarComponent from "@/shared/pages/menubar.component.vue";

export default {
  name: "client-add-check",
  components: { NavigationComponent, MenubarComponent },
  data() {
    return {
      date2: "",
      obs2: "",
      pres2: "",
      id: null,
      checkId: null,
      checks: [],
      checksService: new ChecksService()
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getChecks();
  },
  methods: {
    saveCheck() {
      var data = {
        id: this.checkId,
        clientId: this.id,
        date: this.date2,
        obs: this.obs2,
        pres: this.pres2
      };
      this.checksService.createCheck(data).then(this.$router.push("/clients"));
    },
    getChecks() {
      this.checksService.getChecks()
        .then((response) => {
          this.checks = response.data;
          this.checkId = this.checks.length + 1;
        });
    }
  }
}
</script>

<style scoped>
.f1 {
  height: 100px;
  width: 100%;
}

.f2 {
  width: 30%;
}
hr.solid {
  border-top: 3px solid #bbb;
  border-color: black;
}

.form {
  margin-top: 5%;
  width: 50%;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
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

.back {
  margin: 20px;
}
</style>