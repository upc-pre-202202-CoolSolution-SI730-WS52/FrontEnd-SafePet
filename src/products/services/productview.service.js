import http from "../../shared/services/http-common";
export class productViewService {
  getProductsByID = (category, id) => {
    return http.get(`/products/${id}`);
  };
}
