import App from "./App.vue";
import ProductsCategoryComponent from "./products/pages/products-category.component.vue";
import { createRouter, createWebHistory } from "vue-router"; //Vue vite
import Dogproducts from "./products/pages/products-list.component.vue";
import newProductcomponent from "./products/pages/new-product.component.vue";
const routes = [
    {path: '/', component: App},
    {path: "/products", component: ProductsCategoryComponent},
    {path: "/products/:category", component: Dogproducts},
    {path: "/products/new", component: newProductcomponent}
];

const history = createWebHistory();
const router = createRouter({
    history,
    routes
})
export default router;
