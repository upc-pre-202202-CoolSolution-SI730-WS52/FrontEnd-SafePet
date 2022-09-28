<template>
  <div class="w-full">
    <navigation-component></navigation-component>
    <div class="row flex">
      <div class="col-2">
        <menubar-component></menubar-component>
      </div>
      <div class="col-10 -ml-8">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenubarComponent from "@/shared/pages/menubar.component.vue";
export default {
  name: "App",
  components: { NavigationComponent, MenubarComponent },
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-refresh",
          url: "/",
        },
        {
          label: "Profile",
          icon: "pi pi-user",
        },
        {
          label: "Products",
          icon: "pi pi-cog",
          url: "/products",
        },
        {
          label: "My Clients",
          icon: "pi pi-cog",
        },
        {
          label: "My Appointments",
          icon: "pi pi-cog",
        },
        {
          label: "Messages",
          icon: "pi pi-cog",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
body {
  margin: 0 0;
  background: #0d3c61;
}
</style>
