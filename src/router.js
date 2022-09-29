import ProductsCategoryComponent from "./products/pages/products-category.component.vue";
import { createRouter, createWebHistory } from "vue-router"; //Vue vite
import Dogproducts from "./products/pages/products-list.component.vue";
import HomePetOwner from "./home-pet-owner/pages/home-pet-owner.component.vue";
import ClientsListComponent from "@/clients/pages/clients-list.component.vue";

const routes = [
  { path: "/", component: HomePetOwner },
  { path: "/products", component: ProductsCategoryComponent },
  { path: "/products/:category", component: Dogproducts },
  { path: "/clients", component: ClientsListComponent}
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
});
export default router;
