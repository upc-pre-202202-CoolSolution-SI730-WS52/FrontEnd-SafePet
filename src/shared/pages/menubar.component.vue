<template>
  <div class="menubar-container">
    <pv-menu :model="items" :style="{ height: 635 + 'px', padding: 7 + 'px' }">
      <template #item="{ item }">
        <a :href="item.url" class="p-menuitem-link">
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
          url: "/home-vets",
        },
        {
          label: "Profile",
          icon: "pi pi-user",
          url: "/profile",
        },
        {
          label: "Products",
          icon: "pi pi-shopping-cart",
          url: "/products",
        },
        {
          label: "My Clients",
          icon: "pi pi-users",
          url: "/clients"
        },
        {
          label: "My Appointments",
          icon: "pi pi-calendar",
          url: "/appointments",
        },
        {
          label: "Log Out",
          icon: "pi pi-sign-out",
          url: "/",
        }
      ],
    };
  },
};
</script>

<style scoped>
.menubar-container {
  margin: 20px 20px 0px -9px;
}
.p-menu-list {
  height: 900px;
}
</style>
