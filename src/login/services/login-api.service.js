import axios from "axios";
export class LoginApiService {
    UsersURL= "https://innovamind.herokuapp.com/api/v1/users/sign-in";
    PostUserURL = "https://innovamind.herokuapp.com/api/v1/users/sign-up";
    PostDriverURL = "https://innovamind.herokuapp.com/api/v1/driver";

    getUser(UserRequest) {
        return axios.post(this.UsersURL, UserRequest);
    }
    postUser(UserRequest) {
        return axios.post(this.PostUserURL, UserRequest);
    }
    postDriver(DriverRequest) {
        return axios.post(this.UsersURL, DriverRequest,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
}