import ProductsCategoryComponent from "./products/pages/products-category.component.vue";
import { createRouter, createWebHistory } from "vue-router"; //Vue vite
import Dogproducts from "./products/pages/products-list.component.vue";
import HomePetOwner from "./homes/home-pet-owner/pages/home-pet-owner.component.vue";
import ClientListComponent from "@/clients/pages/clients-list.component.vue";
import AppointmentsComponent from "@/appointments/pages/appointments.component.vue";
import productComponent from "./products/pages/product-view.component.vue";
import ProfileComponent from "@/profile/pages/profile.component.vue";
import VeterinariansListComponent from "./veterinarians-list/pages/veterinarians-list.component.vue";
import VeterinariansProfileComponent from "./veterinarians-list/pages/veterinarians-profile.component.vue";
import ReviewsComponent from "./social/reviews/pages/reviews.component.vue";
import AddReviewComponent from "./social/reviews/pages/add-review/add-review.component.vue";
import ViewClientComponent from "@/clients/pages/view-client.component.vue";
import ClientAddCheckComponent from "@/clients/pages/client-add-check.component.vue";

const routes = [
  { path: "/", component: HomePetOwner },
  { path: "/profile", component: ProfileComponent},
  { path: "/products", component: ProductsCategoryComponent },
  { path: "/products/:category", component: Dogproducts },
  { path: "/clients", component: ClientListComponent },
  { path: "/products/:category/:id", component: productComponent },
  { path: "/appointments", component: AppointmentsComponent },
  { path: "/vets", component: VeterinariansListComponent },
  { path: "/vets-profile/:id", component: VeterinariansProfileComponent },
  { path: "/reviews/:id", component: ReviewsComponent},
  { path: "/new-review/:id", component: AddReviewComponent},
  { path: "/clients/:id", component: ViewClientComponent},
  { path: "/clients/:id/add-check", component: ClientAddCheckComponent}
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
});
export default router;
