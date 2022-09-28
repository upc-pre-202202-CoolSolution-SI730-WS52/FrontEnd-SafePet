<template>
  <div class="big-container">
    <div class="title-label">
      <h1 class="back" @click="$router.push('/products')">{{ category }}</h1>
      <br />
      <div class="buttons align-content-center justify-content-center">
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
            <div class="flex align-items-center justify-content-center">
              <img
                class="image-card"
                :src="'../../src/assets/' + product.image"
                v-bind:alt="product.image"
              />
            </div>
          </template>
          <template #title>
            <h5 class="line-height-2">
              {{ product.title }}
            </h5>
          </template>
          <template #content> s/. {{ product.price }}</template>
        </pv-card>
      </div>
    </div>
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
      category: null,
    };
  },
  created() {
    this.productsService = new ProductsService();
    this.categoryProduct = this.$route.params.category;
    this.category = this.$route.params.category;
    // this.category[0] = this.category[0].toUpperCase();
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
  max-height: 160px;
  max-width: 130px;
}

.product-card {
  align-items: center;
  max-width: 200px;
  max-height: 500px;
  border-style: groove;
}
.buttons {
  justify-content: space-between;
  margin: 0 auto;
}
.big-container {
  width: 100%;
  height: 100%;
  border-style: groove;
  background: #f5f5f5;
}
.back {
  cursor: pointer;
}
</style>
