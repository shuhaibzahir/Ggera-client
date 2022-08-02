import { httpPOSTRequest } from "../httpRequestHandler";
import  API from "../endPoints";

export const sendEmailAddress = (data)=>{
    const url = API.SEND_EMAIL;
    return httpPOSTRequest(url,data);
}