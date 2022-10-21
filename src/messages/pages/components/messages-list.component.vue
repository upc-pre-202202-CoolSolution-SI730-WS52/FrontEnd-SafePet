<template>
  <div class="product-container">
    <div class="top-container">
      <label class="top-container-title" for="MessagesList"> Messages</label>
    </div>

    <div class="message-card" v-for="item in items" v-bind:key="item.id">
      <div
        class="flex align-items-center justify-content-between h-10rem border-round m-2"
      >
        <div class="message-card-container">
          <img
            class="image-card"
            :src="item.photoUrl"
            v-bind:alt="item.photoUrl"
          />
        </div>
        <h3>
          {{ item.name }}
        </h3>
        <pv-button
          class="p-button-rounded p-button-success"
          @click="$router.push('/messages/' + item.id)"
        >
          {{ item.id }}
        </pv-button>
      </div>
    </div>
  </div>
</template>

<script>
import { MessagesServices } from "@/messages/services/messages.services";

export default {
  name: "MessagesListComponent",
  components: {},

  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getMessages();
  },
  methods: {
    getMessages() {
      new MessagesServices().getMessages().then((response) => {
        this.items = response.data;
        console.log(this.items);
      });
    },
  },
};
</script>

<style>
.product-container {
  width: 100%;
  height: 100%;
  border-style: groove;
  padding: 16px;
  background: #ffffff;
  border-radius: 10px;
}

.top-container {
  justify-content: space-between;
  align-items: center;
}

.message-card {
  width: 75%;
  cursor: pointer;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  align-items: center;
}

.image-card {
  max-width: 200px;
  max-height: 150px;
  border-radius: 10px;
}

.top-container-title {
  font-size: 32px;
  font-weight: bold;
}
</style>
