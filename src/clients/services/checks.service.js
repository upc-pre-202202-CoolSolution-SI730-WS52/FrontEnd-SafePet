//It ain't used in all the project, but it will be used in this file
import http from "../../shared/services/http-common";
export class ChecksService {
  getChecks = () => {
    return http.get("/checkups");
  };
  createCheck = (data) => {
    return http.post("checkups", data);
  };
}