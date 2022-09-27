<template>
  <div class="big-container">
    <div class="title-label">
      <h1></h1>
      <br />
      <div class="align-content-center justify-content-center">
        <pv-button @click="$router.push('/products')">back</pv-button>
        <pv-button @click="$router.push('/new')">New Product</pv-button>
      </div>
      <br />
    </div>
    <br />
    <div class="card">
      <div class="flex flex-column md:flex-row card-container">
        <pv-card
          class="product-card align-items-center justify-content-center card-item border-round m-2"
          v-for="product in products"
          v-bind:key="product.id"
        >
          <template #header>
            <img class="image-card" src="src/media/{{product.image}}" />
          </template>
          <template #title> {{ product.title }}</template>
          <template #content> s/. {{ product.price }}</template>
        </pv-card>
      </div>
    </div>
  </div>

  <div>



  </div>
</template>

<script>
import { ProductsService } from "../services/products.service";

export default {
  name: "ProductsListComponent",
  components: {},

  data() {
    return {
      products: [],
      product: {},
      productsService: null,
      categoryProduct: null,
    };
  },
  created() {
    this.productsService = new ProductsService();
    this.categoryProduct = this.$route.params.category;
    this.getProductsByCategory(this.categoryProduct);
    console.log(this.products);
  },
  methods: {
    getProductsByCategory: function (category) {
      this.productsService.getProductsByCategory(category).then((response) => {
        this.products = response.data;
      });
    },
  },
};
</script>

<style scoped>
.image-card {
  max-width: 150px;
}

.product-card {
  align-items: center;
  max-width: 200px;
  max-height: 300px;
  border-style: groove;
}

.big-container {
  width: 100%;
  height: 100%;
  border-style: groove;
}
</style>
