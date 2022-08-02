import React from "react";


const EmailPage = () => {
    let EmailVerified = false;
    let otpVerified = false;
    const handleOtpSubmit = (e)=>{
        e.preventDefault();
        otpVerified  = true;
        console.log("otp verified",otpVerified);
    }
    const handleEmailSubmit = (e)=>{
        e.preventDefault();
        console.log("email verified");
        EmailVerified = true;
    }

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account Here</h2>
        </div>
        <form className="form-wrapper" onSubmit={handleEmailSubmit}>
            <div className="otp">
              <label className="label">EMAIL</label>
              <input className="input" type="number" name="otp" />
            </div>
            <div>
              <button className="submit">SIGN UP</button>
            </div>
          </form>
        {
            EmailVerified ? (<form className="form-wrapper" onSubmit={handleOtpSubmit}>
            <div className="email">
              <label className="label">OTP</label>
              <input className="input" type="" name="email" />
            </div>
            <div>
              <button className="submit">SIGN UP</button>
            </div>
          </form>) : (
            <form className="form-wrapper" onSubmit={handleEmailSubmit}>
            <div className="otp">
              <label className="label">EMAIL</label>
              <input className="input" type="number" name="otp" />
            </div>
            <div>
              <button className="submit">SIGN UP</button>
            </div>
          </form>
          )
        }
        {
            otpVerified ?  (
                <form className="form-wrapper">
                <div className="password">
                  <label className="label">PASSWORD</label>
                  <input
                    className="input"
                    type="password"
                    name="password"
                  />
                </div>
                <div>
                  <button className="submit">SIGN UP</button>
                </div>
              </form> ): (
                <form className="form-wrapper" onSubmit={handleOtpSubmit}>
                <div className="email">
                  <label className="label">OTP</label>
                  <input className="input" type="" name="email" />
                </div>
                <div>
                  <button className="submit">SIGN UP</button>
                </div>
              </form>
              )
        }
      </div>
    </div>
  );
};

export default EmailPage;
