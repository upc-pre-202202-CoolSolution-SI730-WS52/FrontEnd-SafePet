//It ain't used in all the project, but it will be used in this file
import http from "../../shared/services/http-common";
export class ProductsService {
  getProducts = () => {
    return http.get("/products");
  };
  getProductsByCategory = (category) => {
    return http.get(`/products?category=${category}`);
  };
  createProduct = (data) => {
    return http.post("/products", data);
  }
}
