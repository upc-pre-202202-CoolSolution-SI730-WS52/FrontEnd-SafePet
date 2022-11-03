<template>
  <!--
  <div class="w-full h-screen">
    <navigation-component></navigation-component>
    <div class="row flex">
      <div class="col-2">
        <menubar-component></menubar-component>
      </div>
      <div class="col-10 ">
        --><router-view /><!--
      </div>
    </div>
  </div>-->
</template>

<script>
import NavigationComponent from "@/shared/pages/navigation.component.vue";
import MenubarComponent from "@/shared/pages/menubar.component.vue";
export default {
  name: "App",
  components: { NavigationComponent, MenubarComponent },
  data() {
    return {}
  }
};
</script>

<style scoped>
body {
  margin: 0 0;
  background: #0d3c61;
}
</style>
