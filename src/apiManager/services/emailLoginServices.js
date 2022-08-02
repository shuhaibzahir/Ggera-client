import { httpPOSTRequest } from "../httpRequestHandler";
import  API from "../endPoints";

export const sendEmailAddress = (data)=>{
    const url = API.SEND_EMAIL;
    return httpPOSTRequest(url,data);
}
export const sendOtp = (data)=> {
    const url = API.SEND_OTP;
    return httpPOSTRequest(url,data);
}