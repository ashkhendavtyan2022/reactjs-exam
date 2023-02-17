import axios from "axios";

const Api = "https://crudcrud.com/api/70124d77fbd6411694b203b9fce15eff/"

export const SetUser = (data) => {
    return axios.post(`${Api}list`, data)
};

export const GetUsers = () => {
    return axios.get(`${Api}list`)
};

export const DeleteUser = (id) => {
    return axios.delete(`${Api}list/${id}`)
}