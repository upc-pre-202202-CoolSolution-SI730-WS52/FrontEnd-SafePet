<template>

  <div class="navigation-container">
    <pv-toolbar>
      <template #start>
        <div class="navigation-container-left flex align-items-center">
          <img class="logo" src="https://raw.githubusercontent.com/GabrielGomezDlc/PP-Daop/main/src/assets/logo.png" alt="logo" />
          <h1 class="logo-text ml-3">SafePet</h1>
        </div>
      </template>
    </pv-toolbar>
  </div>


  <div class="login">
    <div class="cardo">
      <div class="flex justify-content-center">
        <div class="card">
          <br> <h5 class="text-center">Login</h5>
          <form  class="p-fluid">

            <div class="field">
                <div class="p-float-label">
                <pv-input-text id="email" v-model="email" />
                <label for="email" >Email</label>
              </div>
            </div>

            <div class="field">
              <div class="p-float-label">
                <pv-password id="password" v-model="password" :feedback="false" toggleMask/>
                <label for="password" >Password</label>
              </div>
            </div>
            <div class="toRegister">
              <label >You do not have an account?<a  @click="$router.push(`/register`)"> Register</a></label>

            </div>


            <pv-button @click="login()" label="Login" class="mt-2" />
          </form>
        </div>
      </div>
    </div>
  </div>




</template>

<script>



import {UsersServices} from "../services/users.services";

export default {
  name: "login.component",
  data(){
    return{
      email: "",
      password:"",
      userSearch: {},

    }
  },

  methods:{
    login(){

      new UsersServices().getUserByField("email",this.email).then((response) => {
        this.userSearch = response.data[0];
        console.log(this.userSearch.password)

      });

        if(String(this.userSearch.password)===this.password){
          if(this.userSearch.role==="vet"){
            sessionStorage.setItem("userId", this.userSearch.id.toString());

            this.$router.push(`/home-vet`);
          }else{
            sessionStorage.setItem("userId", this.userSearch.id.toString());
            this.$router.push(`/home-pet-owner`);
          }
        }

    }
  }
}
</script>

<style scoped>

.login{
  margin-top: 40px;

}
.login .card {
  min-width: 450px;

}
.login .card form {
  margin-top: 2rem;
}
.login .card .field {
  margin-bottom: 1.5rem;
}
@media screen and (max-width: 960px) {
  .login .card {
    width: 80%;
  }
}




.navigation-container-left {
  margin-left: 280%
}

.navigation-container {
  width: 100%;
  margin: 0 auto;
}
.logo {
  height: 90px;
}


.cardo {
  font-family: "Lato", sans-serif;
  position: relative;
  width: 500px;
  height: 300px;
  background: #fdfdfe;
  box-shadow: 5px 5px 15px #7e7c7c;
  border-radius: 10px;
  margin-left: 35%;
  margin-bottom: 20px;
  margin-top: 10px;
}

.cardo h5{
  font-size: 20px;
}

.toRegister{
  display:flex;
  align-items: center;
  justify-content: center;
}

.toRegister a{
  color: #00a641;
}

.toRegister a:hover{
  cursor:pointer;
}

</style>