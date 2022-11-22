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
  name: "MenuBarPetOwnerComponent",
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-home",
          url: "/home-pet-owner",
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
          label: "Vets",
          icon: "pi pi-users",
          url: "/vets"
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
