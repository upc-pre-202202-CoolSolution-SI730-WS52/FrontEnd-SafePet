import ProductsCategoryComponent from "./products/pages/products-category.component.vue";
import { createRouter, createWebHistory } from "vue-router"; //Vue vite
import Dogproducts from "./products/pages/products-list.component.vue";
const routes = [
    {path: '/', component: ProductsCategoryComponent},
    {path: "/products", component: ProductsCategoryComponent},
    {path: "/products/:category", component: Dogproducts},
];

const history = createWebHistory();
const router = createRouter({
    history,
    routes
})
export default router;
