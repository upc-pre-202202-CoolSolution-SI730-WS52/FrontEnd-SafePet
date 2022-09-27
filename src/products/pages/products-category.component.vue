<template>
  <div class="product-container">
    <div class="top-container">
      <label for="ProductList"> Products</label>
      <h6>Select a product category</h6>
    </div>

    <br />
    <div class="cards justify-content-center">
      <div class="category-card">
        <div class="category-card-container">
          <div>
            <div class="image"></div>
          </div>
        </div>
        <div class="category-card-container">
          <div>
            <h3>Dogs</h3>
            <h6>Cant</h6>
          </div>
        </div>
        <div class="category-card-container mr-0">
          <pv-button
            @click="$router.push('/products/dog')"
            class="pi pi-check"
          ></pv-button>
        </div>
      </div>
      <br />
      <div class="category-card">
        <div class="category-card-container">
          <div>
            <div class="image2"></div>
          </div>
        </div>
        <div class="category-card-container">
          <div>
            <h3>Cats</h3>
            <h6>Cant</h6>
          </div>
        </div>
        <div class="category-card-container mr-0">
          <pv-button
            @click="$router.push('/products/cat')"
            icon="pi pi-check"
          ></pv-button>
        </div>
      </div>

      <br />
      <div class="category-card">
        <div class="category-card-container">
          <div>
            <div class="image3"></div>
          </div>
        </div>
        <div class="category-card-container mr-0">
          <div>
            <h3>Other</h3>
            <h6>Cant</h6>
          </div>
        </div>
        <div class="category-card-container">
          <pv-button icon="pi pi-check" @click="$router.push('/products/other')">
          </pv-button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ProductsCategoryComponent",

};
</script>

<style scoped>
.product-container {
  width: 100%;
  height: 100%;
  border-style: groove;
  padding: 16px;
  margin: 20px;
  background: #f5f5f5;
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

div.image {
  /*content: url(https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);*/
  width: 100px;
  height: 100px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

div.image2 {
  /*content: url(https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);*/
  width: 100px;
  height: 100px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

div.image3 {
  /*content: url(https://www.theveterinarydentist.com/wp-content/uploads/2016/09/fig1.jpg);*/
  width: 100px;
  height: 100px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
</style>
