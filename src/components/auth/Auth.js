import React, { useState } from 'react'
import Signup from './Signup';

const Auth = () => {
    const [signIn, setSignIn] = useState(false);
  return (
    <div>
        <div className='container'>
            <h1 className='py-5 text-center'>Welcome to Ggera</h1>
             <div className='d-flex align-items-center justify-content-center'>
             {
                signIn? 
                <h1>signin</h1>:
                <Signup />
             }
             </div>
        </div>
    </div>
  )
}

export default Auth