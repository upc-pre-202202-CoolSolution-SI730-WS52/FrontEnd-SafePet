import http from "../../../shared/services/http-common";

export class ReviewsServices {

    getReviews = () => {
        return http.get("/reviews");
    };

    getReviewById = (id) => {
        return http.get(`/reviews/${id}`);
    };


    getReviewByField = (field, value) => {
        return http.get(`/reviews/${field}/${value}`);
    };

    createReview=(petOwnerId, petOwnerName,veterinarianId, veterinarianName, stars,comment)=>{
        return http.post("/reviews", {
            "petOwnerId": petOwnerId,
            "petOwnerName": petOwnerName,
            "veterinarianId": veterinarianId,
            "veterinarianName": veterinarianName,
            "stars": stars,
            "comment": comment
        })
    }
}
