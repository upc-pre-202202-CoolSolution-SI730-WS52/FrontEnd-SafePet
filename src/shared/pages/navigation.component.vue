<template>
  <div class="navigation-container">
    <pv-toolbar>
      <template #start>
        <div class="navigation-container-left flex align-items-center">
          <img class="logo" src="https://raw.githubusercontent.com/GabrielGomezDlc/PP-Daop/main/src/assets/logo.png" alt="logo" />
          <h1 class="logo-text ml-3">SafePet</h1>
        </div>
      </template>
      <template #end>
        <div class="navigation-container-right">
          <pv-button
            icon="pi pi-bell"
            class="p-button-rounded p-button-text"
          ></pv-button>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
};
</script>

<style scoped>
.navigation-container-right {
  padding-right: 30px;
}
.navigation-container-left {
  padding-left: 30px;
}
.navigation-container {
  width: 100%;
  margin: 0 auto;
}
.logo {
  height: 90px;
}
</style>
