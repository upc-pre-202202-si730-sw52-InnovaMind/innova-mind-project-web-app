import axios from "axios";
export class LoginApiService {
    UsersURL= "https://localhost:7275/api/v1/users/sign-in";
    PostUserURL = "https://localhost:7275/api/v1/users/sign-up";
    PostDriverURL = "https://localhost:7275/api/v1/driver";

    getUser(UserRequest) {
        return axios.post(this.UsersURL, UserRequest);
    }
    postUser(UserRequest) {
        return axios.post(this.PostUserURL, UserRequest);
    }
    postDriver(DriverRequest) {
        return axios.post(this.UsersURL, DriverRequest);
    }

}