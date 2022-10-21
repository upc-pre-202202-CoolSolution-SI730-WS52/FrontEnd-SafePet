<template>
  <div class="big-container pl-5 mt-3">
    <div class="title-label">
      <h1 class="back" @click="$router.push('/products')">> {{ category }}</h1>
      <br />
      <pv-button> New product</pv-button>
      <br />
    </div>
    <br />
    <div>
      <div class="cards">
        <pv-card v-for="product in products" v-bind:key="product.id">
          <template #header>
            <div class="card-header">
              <div class="card-image">
                <img
                  class="image-card"
                  :src="'../../src/assets/' + product.image"
                  v-bind:alt="product.image"
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
              <pv-button
                label="See more"
                @click="
                  $router.push(`/products/${product.category}/${product.id}`)
                "
              />
            </div>
          </template>
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
</style>
