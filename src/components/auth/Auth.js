import React, { useState } from 'react'
import { useSelector } from "react-redux";
import OtpVerify from './OtpVerify';
import Signup from './Signup';

const Auth = () => {
  const optSend = useSelector(state => state.user.otpSend);
    // const [signIn, setSignIn] = useState(false);
  return (
    <div>
        <div className='container'>
            <h1 className='py-5 text-center'>Welcome to Ggera</h1>
             <div className='d-flex align-items-center justify-content-center'>
             {/* <h1>signin</h1>   */}
             {
                optSend?
                <OtpVerify/>
                :
                <Signup />
             }
             </div>
        </div>
    </div>
  )
}

export default Auth