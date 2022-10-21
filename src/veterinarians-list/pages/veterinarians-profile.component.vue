<template>
  <div class="myprofile-container">

     <div class="container-header">
       <h1><i class="pi pi-angle-left" @click="$router.push(`/vets`)"></i>Veterinary Profile </h1>
     </div>

    <div class="container-body">

      <div class="card" >
        <div class="card-content" >
          <div class="container-title">
            <div clas="container-title-image">
              <img alt="profile" :src="veterinary.photoUrl"/>
            </div>
            <div class="container-title-name">
              <h1>{{veterinary.name}}</h1>
            </div>
          </div>
          <div class="container-body-text">
            <div class="icon">
              <i class="pi pi-calendar"></i>
              <p>{{veterinary.appointmentsQuantity}} Appointments</p>
            </div>
            <div class="icon">
              <i class="pi pi-star-fill"></i>
              <div class="stars">
              <p>{{veterinary.score}} /</p><p class="stars-limit"> 5</p>
              </div>
            </div>
            <div class="icon">
              <i class="pi pi-phone"></i>
              <p>{{veterinary.phone}}</p>
            </div>
            <div class="icon">
              <i class="pi pi-envelope"></i>
              <p>{{veterinary.email}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="go-to-reviews">
       <pv-button @click="$router.push(`/reviews/${veterinary.id}`)" >Reviews</pv-button>
      </div>
    </div>
  </div>
</template>

<script>
import {VeterinariansServices} from "../services/veterinarians.services";

export default {
  name: "veterinarians-profile",
  data(){
    return{
      id:null,
      veterinariansService:null,
      veterinary: null,
    }
  },

  created() {
    this.id = this.$route.params.id;
    this.veterinariansService= new VeterinariansServices;

    this.veterinariansService.getVeterinarianById(this.id).then((response) => {
      this.veterinary = response.data;

    });
  },
}

</script>

<style scoped>
*{
  font-size: 20px;
}

h1{
  font-size: 30px;
}

.myprofile-container{
  width: 97%;
  height: 100%;
  border-radius: 20px;
  padding: 16px;
  margin-top: 20px;
  margin-left: 10px;
  background: #f5f5f5;
}

.container-title{
  display: flex;
  flex-direction: column;
  align-items: center;
}

img{
  display: flex;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin-top: 2%;
}

.container-title-name{
  margin-top: 1%;
}

.container-body-text{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 2%;
}

.icon{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1px;
}

i{
  margin: 2%;
}

.pi-angle-left{

  font-size: 2rem;

}

.stars{
display:flex;
}

.stars-limit{
  margin-top:8px;
  font-size:15px;
}

.go-to-reviews{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>