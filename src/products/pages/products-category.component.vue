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
        <div class="product-container pl-5 mt-3">
          <div class="top-container">
            <label class="top-container-title" for="ProductList"> Products</label>
            <h3>Select a product category</h3>
          </div>

          <br />
          <div class="cards justify-content-center">
            <div class="category-card">
              <div class="category-card-container">
                <img class="image" src="https://raw.githubusercontent.com/GabrielGomezDlc/PP-Daop/main/src/assets/dogs.png" alt="category" />
              </div>
              <div class="category-card-container ml-3">
                <div class="ml-3">
                  <h1>Dogs</h1>
                  <h4>Cant: {{ countDog }}</h4>
                </div>
              </div>
              <div class="category-card-container flex justify-content-end mr-6">
                <pv-button
                    class="p-button-text p-button-lg"
                    @click="$router.push('/products/dog')"
                    icon="pi pi-arrow-right"
                ></pv-button>
              </div>
            </div>
            <br />
            <div class="category-card">
              <div class="category-card-container">
                <img class="image" src="https://raw.githubusercontent.com/GabrielGomezDlc/PP-Daop/main/src/assets/cat.jpg" alt="category" />
              </div>
              <div class="category-card-container ml-3">
                <div class="ml-3">
                  <h1>Cats</h1>
                  <h4>Cant: {{ countCat }}</h4>
                </div>
              </div>
              <div class="category-card-container flex justify-content-end mr-6">
                <pv-button
                    class="p-button-text p-button-lg"
                    @click="$router.push('/products/cat')"
                    icon="pi pi-arrow-right"
                ></pv-button>
              </div>
            </div>

            <br />
            <div class="category-card">
              <div class="category-card-container">
                <img class="image" src="https://raw.githubusercontent.com/GabrielGomezDlc/PP-Daop/main/src/assets/Other.jpg" alt="category" />
              </div>
              <div class="category-card-container ml-3">
                <div class="ml-3">
                  <h1>Other</h1>
                  <h4>Cant: {{ countOther }}</h4>
                </div>
              </div>
              <div class="category-card-container flex justify-content-end mr-6">
                <pv-button
                    class="p-button-text p-button-lg"
                    icon="pi pi-arrow-right"
                    @click="$router.push('/products/other')"
                >
                </pv-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
import { ProductsService } from "@/products/services/products.service";
import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenubarComponent from "@/shared/pages/menubar.component.vue";
import {UsersServices} from "../../security/services/users.services";
import MenuBarPetOwnerComponent from "../../shared/pages/menubar-pet-owners.component.vue";

export default {
  name: "ProductsCategoryComponent",
  components: { NavigationComponent, MenubarComponent,MenuBarPetOwnerComponent },
  data() {
    return {
      currentUser: Number(sessionStorage.getItem("userId")),

      userRole: "",


      products: [],
      product: {},
      productsService: null,
      categoryProduct: null,
      category: null,
      count:null,
      countDog: 0,
      countCat: 0,
      countOther: 0,
    };
  },
  created() {
    new UsersServices().getUserById(this.currentUser).then((response) => {
      this.userRole=String(response.data.role)
    });

    this.productsService = new ProductsService();
    this.productsService.getProducts().then((response) => {
      this.count = response.data;
      for(let i = 0; i < this.count.length; i++) {
        if(this.count[i].category==="dog")this.countDog+=1;
        if(this.count[i].category==="cat")this.countCat+=1;
        if(this.count[i].category==="other")this.countOther+=1;
      }


    });
  },
};
</script>

<style scoped>
.product-container {
  width: 100%;
  height: 100%;
  border-style: groove;
  padding: 16px;
  background: #ffffff;
  border-radius: 10px;
}
.top-container {
  /*background: ;*/
  justify-content: space-between;
  align-items: center;
}
.category-card {
  width: 75%;
  display: flex;
  cursor: pointer;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  align-items: center;
}
.category-card-container {
  flex: 1;
}

.image {
  max-width: 200px;
  max-height: 150px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.top-container-title {
  font-size: 32px;
  font-weight: bold;
}
</style>
