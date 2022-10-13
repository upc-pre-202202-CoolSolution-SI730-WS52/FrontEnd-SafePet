<template>
  <div class="big-container">
    <div class="big-container-c">
      <pv-button class="back" @click="$router.push(`/products/`)">
        Back
      </pv-button>

      <div class="card-component">
        <img
          class="image-card"
          :src="'../../src/assets/' + item.image"
          v-bind:alt="item.image"
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
</template>

<script>
import { productViewService } from "@/products/services/productview.service";

export default {
  name: "productComponent",
  components: {},

  data() {
    return {
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
