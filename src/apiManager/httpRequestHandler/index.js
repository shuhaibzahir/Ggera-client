import axios from 'axios';

export const httpGETRequest = (url,data)=>{
    return axios.get();
}
export const httpPOSTRequest = (url,data)=>{
    console.log("ith",url,"sdfd",data)
    axios.post(url,data);
}