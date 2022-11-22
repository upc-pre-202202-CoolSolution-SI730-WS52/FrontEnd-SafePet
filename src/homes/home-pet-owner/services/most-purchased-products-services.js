import http from "../../../shared/services/http-common";

export class MostPurchasedProductsServices {


    getMostPurchasedProducts=()=>{
        return http.get("/mostpurchasedproducts")
    }

}
