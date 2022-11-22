import axios from "axios";
export class loginApiService {
    UsersURL= "https://innovamind.herokuapp.com/api/v1/users";
    getUsers() {
        return axios.get(this.UsersURL);
    }
}