<template>

  <div class="w-full h-screen">
    <navigation-component></navigation-component>
    <div class="row flex">
      <div class="col-2">
        <menubar-component></menubar-component>
      </div>
      <div class="col-10 ">

        <div class="container">
          <div class="container-header">
            <h1><i class="pi pi-angle-left" @click="$router.push(`/vets-profile/${veterinary.id}`)"></i>Veterinary Reviews</h1>
          </div>

          <pv-card class="card">
            <template #content>
              <div class="body-content">
                <div class="container-body_image">
                  <img  :src="veterinary.photoUrl" :alt="veterinary.name" />
                </div>

                <div class="container-body_text">
                  <h2>Vet. {{ veterinary.name }}</h2>
                  <p>Appointments: {{veterinary.appointmentsQuantity}}</p>
                  <p>Score: {{ veterinary.score }} <i class="pi pi-star-fill" ></i></p>
                </div>
              </div>
            </template>
          </pv-card>

          <pv-divider align="left" class="divider">
            <span class="p-tag">Reviews</span>
          </pv-divider>

          <div class="container-body" v-for="review in reviews" :key="review.id">
            <div class="card-apo">
              <div class="info">
                <h1>{{ review.petOwnerName}}</h1>
                <h2>{{ review.comment }}</h2>
              </div>
              <div class="stars">
                <h2><i class="pi pi-star-fill" ></i> {{ review.stars }} / </h2><h3>5</h3>
              </div>
            </div>
          </div>

          <div class="go-to-add-review">
            <pv-button @click="$router.push(`/new-review/${veterinary.id}`)" >Add Review</pv-button>
          </div>

        </div>

      </div>
    </div>
  </div>



</template>

<script>
import {ReviewsServices} from "../services/reviews.services";
import {VeterinariansServices} from "../../../veterinarians-list/services/veterinarians.services";
import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenubarComponent from "@/shared/pages/menubar.component.vue";

export default {
  name: "reviews",
  components: { NavigationComponent, MenubarComponent },
  data(){
    return{
      id:null,
      reviewsService: null,
      reviews:null,
      veterinary: null,
      veterinariansService:null,
    }
  },
  created() {
    this.id = this.$route.params.id;

    this.veterinariansService= new VeterinariansServices;

    this.veterinariansService.getVeterinarianById(this.id).then((response) => {
      this.veterinary = response.data;

    });
    this.reviewsService= new ReviewsServices;

    this.reviewsService.getReviewByField('veterinarianId',this.id).then((response) => {
      this.reviews = response.data;

    });
  },
}
</script>

<style scoped>

h1{
  font-size: 30px;
}

h2{
  font-size:20px;
}

.container {
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

.card {
  border-radius: 20px;
  width: 500px;
  height: 150px;
  margin-top:10px;
  margin-bottom: 30px;
  margin-left:20px;
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

.pi-angle-left{

  font-size: 2rem;

}
.container-body{
  margin-left: 20px;

}


pv-button {
  background-color: #005320;
  margin-bottom: 50px;
}


.container-body_image img {
  width: 98px;
  height: 97px;
  border-radius: 50%;
}


a {
  color: #00a741;
}

i{
  font-size: 1rem;
}


/* Reviews */

.card-apo {
  display: grid;
  font-family: "Lato", sans-serif;
  position: relative;
  width: 600px;
  height: 100px;
  background: #fdfdfe;
  box-shadow: 5px 5px 15px #7e7c7c;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
}

.info {
  position: absolute;
  top: 10%;
  left: 5%;
}

.info h1{
  font-size: 1.5vw;
}

.info h2 {
  font-weight: lighter;
}

.stars {
  display: flex;
  top: 25px;
  margin-left: 80%;
}

.stars i{
  font-size: 2vw;
}

.stars h2{
  font-size: 2vw;
}

.stars h3{
  margin-top: 14px;
}

.go-to-add-review{
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>