<template>
  <div class="menubar-container">
    <pv-menu :model="items">
      <template #item="{ item }">
        <a :href="item.url" class="p-menuitem-link" >
            <span class="p-menuitem-icon">
                <i :class="item.icon"></i>
            </span>
          <span class="p-menuitem-text">{{ item.label }}</span>
        </a>
      </template>
    </pv-menu>
  </div>
</template>

<script>
export default {
  name: "MenuBarComponent",
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-home",
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
          icon: "",
        }
      ],
    };
  },
}
</script>

<style scoped>
.menubar-container{
  margin:20px 20px 0px -9px;
}
</style>