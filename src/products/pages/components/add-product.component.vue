<template>
  <div>
    <pv-dialog v-model:visible="display">
      <template #header>
        <h3>Header</h3>
      </template>

      Content

      <template #footer>
        <pv-button label="No" icon="pi pi-times" class="p-button-text"/>
        <pv-button label="Yes" icon="pi pi-check" autofocus />
      </template>
    </pv-dialog>
  </div>
</template>

<script>
export default {
  name: "AddProductComponent",
}
</script>

<style scoped>

</style>