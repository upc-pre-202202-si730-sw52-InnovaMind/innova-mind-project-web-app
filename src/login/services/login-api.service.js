import axios from "axios";
export class loginApiService {
    UsersURL= "http://localhost:3000/users";
    getUsers() {
        return axios.get(this.UsersURL);
    }
}