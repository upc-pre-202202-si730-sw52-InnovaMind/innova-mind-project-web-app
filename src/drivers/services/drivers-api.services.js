import axios from "axios";
export class DriversServices {
    BaseURL = "http://localhost:3000/drivers";
    NewsURL = "http://localhost:3000/driver-news";
    ContactsURL = "http://localhost:3000/contacts";
    MessagesURL = "http://localhost:3000/messages";

    GetAll() {
        return axios.get(this.BaseURL);
    }
    Add(driver) {
        return axios.post(this.BaseURL, driver);
    }
    Modify(id, driver) {
        return axios.put(`${this.BaseURL}/${id}`, driver);
    }
    Delete(id) {
        return axios.delete(`${this.BaseURL}/${id}`);
    }
    GetDriversNews() {
        return axios.get(this.NewsURL);
    }

    //////Messages Section /////////

    GetMessages(id) {
        return axios.get(`https://localhost:7275/api/v1/1/message/${id}`);
    }

    GetContacts() {
        return axios.get(`https://localhost:7275/api/v1/1/message/drivers`);
    }

    SendMessage(answer, id){
        return axios.post(`https://localhost:7275/api/v1/1/message/${id}`, answer)
    }
}
