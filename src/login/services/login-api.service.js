import axios from "axios";
export class loginApiService {
    UsersURL= "https://localhost:7275/api/v1/users";
    getUsers() {
        return axios.get(this.UsersURL);
    }
}