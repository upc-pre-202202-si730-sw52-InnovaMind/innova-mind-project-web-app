import axios from "axios";
export class loginApiService {
    UsersURL= "https://localhost:7275/api/v1/users/sign-in";
    getUser(UserRequest) {
        return axios.post(this.UsersURL, UserRequest);
    }
}