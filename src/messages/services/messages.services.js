//It ain't used in all the project, but it will be used in this file
import http from "../../shared/services/http-common";
export class MessagesServices {
  getMessages = () => {
    return http.get("/messages");
  };
}
