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
        <div class="big-container">
          <div class="big-container-c">
            <pv-button class="back" @click="$router.push(`/products/`)">
              Back
            </pv-button>

            <div class="card-component">
              <img
                  class="image-card"
                  :src="item.image"
                  v-bind:alt="item.name"
              />
              <h1>
                {{ item.title }}
              </h1>
              <div class="card-price">
                <h2>s./ {{ item.price }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { productViewService } from "@/products/services/productview.service";
import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenubarComponent from "@/shared/pages/menubar.component.vue";
import {UsersServices} from "../../security/services/users.services";
import MenuBarPetOwnerComponent from "../../shared/pages/menubar-pet-owners.component.vue";

export default {
  name: "productComponent",
  components: { NavigationComponent, MenubarComponent,MenuBarPetOwnerComponent  },

  data() {
    return {
      currentUser: Number(sessionStorage.getItem("userId")),

      userRole: "",

      item: {
        title: "",
        price: 0,
        author: "",
        image: "",
        category: "",
      },
      id: null,
    };
  },
  created() {

    new UsersServices().getUserById(this.currentUser).then((response) => {
      this.userRole=String(response.data.role)
    });

    this.id = this.$route.params.id;
    this.item.category = this.$route.params.category;
    this.getInformation(this.id);


  },
  methods: {
    getInformation() {
      new productViewService()
        .getProductsByID(this.item.category, this.id)
        .then((response) => {
          this.item = response.data[0];
          console.log(response.data);
        });
    },
  },
};
</script>

<style scoped>
.big-container {
  width: 100%;
  height: 100%;
  border-style: groove;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 16px;
}

.big-container-c {
  justify-content: space-between;
  align-items: center;
}

.card-component {
  display: flex;
  row-gap: 50px;
  column-gap: 40px;
}
.image-card {
  max-width: 40%;
  max-height: 40%;
}
.card-price{
  align-self: flex-end;
  align-content: center;
  width: 40%;


}
</style>
