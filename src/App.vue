
<template>
  <div>
    <pv-menu :model="items">
      <template #item="{ item }">
        <a :href="item.url" class="p-menuitem-link" >
            <span class= {{item.icon}}>
            </span>
          <span class="p-menuitem-text">{{ item.label }}</span>
        </a>
      </template>
    </pv-menu>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
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
        }
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.span{
  max-height: 100px;
}
</style>
