import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSendUSerOtp } from "../../actions/user";
import { sendEmailAddress } from "../../apiManager/services/emailLoginServices";

const Signup = () => {
  const dispatch = useDispatch();
  const [email,setEmail] = useState('');
  const handleSubmit = ()=>{
    sendEmailAddress(email);
    dispatch(setSendUSerOtp(true));
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group mt-3">
          
          <label className="form-control-placeholder" for="username">
            Email
          </label>
          <input value={email}  onChange={(e)=> setEmail(e.target.value)} type="text" className="form-control" required />
        </div>
      
        <div className="form-group">
          <button
            type="submit"
            className="form-control btn btn-primary rounded submit px-3"
          >
            Signup
          </button>
        </div>
        
        <div className="d-flex text-md-right">
            <p className="p-3" href="ss">Login ?</p>
            <p className="p-3" href="ss">Forgot Password ?</p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
