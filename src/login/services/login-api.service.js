import axios from "axios";
export class loginApiService {
    UsersURL= "http://20.83.177.159:3000/users";
    getUsers() {
        return axios.get(this.UsersURL);
    }
}