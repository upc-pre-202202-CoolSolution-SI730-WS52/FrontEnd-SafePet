<template>

 <div class="w-full h-screen">
   <navigation-component></navigation-component>
   <div class="row flex">
     <div class="col-2" v-if="userRole==='vet'">

       <menubar-component></menubar-component>
     </div>
     <div class="col-2" v-else>
       <menu-bar-pet-owner-component></menu-bar-pet-owner-component>
     </div>
     <div class="col-10 ">
       <div class="myprofile-container">
         <div class="container-body">

           <div class="card" >
             <div class="card-content" v-for="profile in profile" :key="profile.id">
               <div class="container-title">
                 <div clas="container-title-image">
                   <img alt="profile" :src="profile.photoUrl"/>
                 </div>
                 <div class="container-title-name">
                   <h1>{{profile.name}}</h1>
                 </div>
               </div>
               <div class="container-body-text">
                 <div class="icon">
                   <i class="pi pi-calendar"></i>
                   <p>{{profile.birthday}}</p>
                 </div>
                 <div class="icon">
                   <i class="pi pi-phone"></i>
                   <p>{{profile.phone}}</p>
                 </div>
                 <div class="icon">
                   <i class="pi pi-envelope"></i>
                   <p>{{profile.email}}</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
      </div>
    </div>
  </div>




</template>

<script>
import {ProfileServices} from "../services/profile.services.js";
import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenubarComponent from "@/shared/pages/menubar.component.vue";
import {UsersServices} from "../../security/services/users.services";
import MenuBarPetOwnerComponent from "../../shared/pages/menubar-pet-owners.component.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Profile',
  components: { NavigationComponent, MenubarComponent,MenuBarPetOwnerComponent },
  data(){
    return{
      profile:null,

      currentUser: Number(sessionStorage.getItem("userId")),

      userRole: "",

    }
  },
  created(){
    new UsersServices().getUserById(this.currentUser).then((response) => {
      this.userRole=String(response.data.role)
    });

    new ProfileServices().getProfile().then(response => {
      this.profile = response.data
    })
  },
}
</script>


<style scoped>
*{
  font-family: 'IBM Plex Sans',sans-serif;
  font-size: 20px;
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
  border-radius: 400%;
  width: 320px;
  height: 400px;
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

</style>