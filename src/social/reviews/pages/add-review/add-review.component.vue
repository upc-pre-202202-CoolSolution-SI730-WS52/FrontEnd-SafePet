<template>
  <div class="container">
    <div class="container-header">
      <h1><i class="pi pi-angle-left" @click="$router.push(`/reviews/${id}`)"></i>New Review</h1>
    </div>

    <pv-divider align="left" class="divider">
      <span class="p-tag">Veterinary</span>
    </pv-divider>
    <div class="review-data">
      <h1>{{veterinary.name}}</h1>
    </div>

    <pv-divider align="left" class="divider">
      <span class="p-tag">Score</span>
    </pv-divider>

    <div class="review-data">
    <pv-rating v-model="stars" :cancel="false" />
    </div>

    <pv-divider align="left" class="divider">
      <span class="p-tag">Comment</span>
    </pv-divider>

    <div class="review-data">
    <pv-textarea v-model="comment" rows="5" cols="50" />
    </div>

    <div class="add-review">
      <pv-button @click="addReview()" >Add Review</pv-button>
    </div>

  </div>
</template>

<script>

import {VeterinariansServices} from "../../../../veterinarians-list/services/veterinarians.services";
import {ReviewsServices} from "../../services/reviews.services";

export default {
  name: "add-review.component",
  data(){
    return{
      id:null,
      currentUser:1,
      veterinary: null,
      veterinariansService:null,
      stars:0,
      comment:null,
      reviewsService:null
    }
  },
  created() {
    this.id = this.$route.params.id;

    this.veterinariansService= new VeterinariansServices;
    this.reviewsService= new ReviewsServices;

    this.veterinariansService.getVeterinarianById(this.id).then((response) => {
      this.veterinary = response.data;

    });

  },
  methods:{
    addReview(){

      this.reviewsService.createReview(this.currentUser,"Pedro Castillo",this.veterinary.id, this.veterinary.name, this.stars,this.comment).then((response) => {
        this.$router.push(`/reviews/${this.id}`);

      });
    }
  }
}
</script>

<style scoped>
*{
  font-size: 20px;
}

h1{
  font-size: 30px;
}

.container{
  width: 97%;
  height: 100%;
  border-radius: 20px;
  padding: 16px;
  margin-top: 20px;
  margin-left: 10px;
  background: #f5f5f5;
}

img{
  display: flex;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin-top: 2%;
}

i{
  margin: 2%;
}

.pi-angle-left{

  font-size: 2rem;

}

.review-data{
  margin-left:20px;

}

.add-review{
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>