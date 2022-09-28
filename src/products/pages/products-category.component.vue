<template>
  <div class="product-container pl-5">
    <div class="top-container">
      <label for="ProductList"> Products</label>
      <h6>Select a product category</h6>
    </div>

    <br />
    <div class="cards justify-content-center">
      <div class="category-card">
        <div class="category-card-container">
          <img class="image" src="@/assets/dogs.png" alt="category" />
        </div>
        <div class="category-card-container">
          <div class="ml-3">
            <h3>Dogs</h3>
            <h6>Cant: {{ countDog }}</h6>
          </div>
        </div>
        <div class="category-card-container mr-0">
          <pv-button
            class="p-button-text"
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
        <div class="category-card-container">
          <div class="ml-3">
            <h3>Cats</h3>
            <h6>Cant: {{ countCat }}</h6>
          </div>
        </div>
        <div class="category-card-container mr-0">
          <pv-button
            class="p-button-text"
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
        <div class="category-card-container mr-0">
          <div class="ml-3">
            <h3>Other</h3>
            <h6>Cant: {{ countOther }}</h6>
          </div>
        </div>
        <div class="category-card-container">
          <pv-button
            class="p-button-text"
            icon="pi pi-arrow-right"
            @click="$router.push('/products/other')"
          >
          </pv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProductsService } from "@/products/services/products.service";
export default {
  name: "ProductsCategoryComponent",
  components: {},
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
      console.log(response.data);
      this.countDog = response.data.length;
    });
    this.productsService.getProductsByCategory("cat").then((response) => {
      console.log(response.data);
      this.countCat = response.data.length;
    });
    this.countOther = this.productsService
      .getProductsByCategory("other")
      .then((response) => {
        console.log(response.data);
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
  margin: 20px;
  background: #ffffff;
  border-radius: 10px;
}
.top-container {
  /*background: ;*/
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.category-card {
  width: 300px;
  display: flex;
  cursor: pointer;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  align-items: center;
}
.cards {
  max-height: 100%;
  max-width: 100%;
}
.category-card-container {
  flex: 1;
}

.image {
  width: 100px;
  height: 100px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
</style>
