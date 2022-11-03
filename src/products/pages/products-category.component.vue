<template>
  <div class="w-full h-screen">
    <navigation-component></navigation-component>
    <div class="row flex">
      <div class="col-2">
        <menubar-component></menubar-component>
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
                <img class="image" src="@/assets/dogs.png" alt="category" />
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
                <img class="image" src="@/assets/cat.jpg" alt="category" />
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
                <img class="image" src="@/assets/Other.jpg" alt="category" />
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

export default {
  name: "ProductsCategoryComponent",
  components: { NavigationComponent, MenubarComponent },
  data() {
    return {
      products: [],
      product: {},
      productsService: null,
      categoryProduct: null,
      category: null,
      countDog: null,
      countCat: null,
      countOther: null,
    };
  },
  created() {
    this.productsService = new ProductsService();
    this.productsService.getProductsByCategory("dog").then((response) => {
      this.countDog = response.data.length;
    });
    this.productsService.getProductsByCategory("cat").then((response) => {
      this.countCat = response.data.length;
    });
    this.countOther = this.productsService
      .getProductsByCategory("other")
      .then((response) => {
        this.countOther = response.data.length;
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
