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
        <div class="big-container pl-5 mt-3">
          <div class="title-label">
            <h1 class="back" ><i class="pi pi-angle-left" @click="$router.push('/products')"></i> {{ category }}</h1>
            <br />
            <pv-button  v-if="userRole==='vet'"> New product</pv-button>
            <br />
          </div>
          <br />
          <div>
            <div class="cards">
              <pv-card v-for="product in products" v-bind:key="product.id" v-show="product.category===this.category">
                <template #header>
                  <div class="card-header">
                    <div class="card-image">
                      <img
                          class="image-card"
                          :src="product.image"
                          v-bind:alt="product.name"
                      />
                    </div>
                  </div>
                </template>
                <template #title>
                  <h5 class="line-height-2">
                    {{ product.title }}
                  </h5>
                </template>
                <template #footer>
                  <div class="p-card-footer">
                    <pv-button label="See more" @click="$router.push(`/products/${product.category}/${product.id}`)"/>
                  </div>
                </template>
              </pv-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { ProductsService } from "../services/products.service";
import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenubarComponent from "@/shared/pages/menubar.component.vue";
import {UsersServices} from "../../security/services/users.services";
import MenuBarPetOwnerComponent from "../../shared/pages/menubar-pet-owners.component.vue";


export default {
  name: "ProductsListComponent",
  components: { NavigationComponent, MenubarComponent ,MenuBarPetOwnerComponent},

  data() {
    return {
      currentUser: Number(sessionStorage.getItem("userId")),

      userRole: "",

      products: [],
      product: {},
      productsService: null,
      categoryProduct: null,
      category: null,
    };
  },
  created() {
    new UsersServices().getUserById(this.currentUser).then((response) => {
      this.userRole=String(response.data.role)
    });

    this.productsService = new ProductsService();
    this.categoryProduct = this.$route.params.category;
    this.category = this.$route.params.category;
    this.getProductsByCategory(this.categoryProduct);
  },
  methods: {
    getProductsByCategory: function (category) {
      this.productsService.getProducts().then((response) => {
        this.products = response.data;
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

.back {
  cursor: pointer;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 50px;
  column-gap: 40px;
  border-radius: 80%;
}
.card-image {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 40%;
}
.p-card-footer {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  font-size: 30px;

}
.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  max-height: 700px;
}

.pi-angle-left{

  font-size: 2rem;

}
</style>
