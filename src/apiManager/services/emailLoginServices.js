import { httpPOSTRequest } from "../httpRequestHandler";
import  API from "../endPoints";

export const sendEmailAddress = (data)=>{
    console.log("ivde");
    const url = API.SEND_EMAIL;
    return httpPOSTRequest(url,data);
}