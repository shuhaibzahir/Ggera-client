import React from "react";

function OtpVerify() {
  return (
    <div>
      <div>
        <form  className="signin-form">
          <div className="form-group mt-3">
            <label className="form-control-placeholder" for="username">
              OTP
            </label>
            <input
              
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="form-control btn btn-primary rounded submit px-3"
            >
              Verify
            </button>
          </div>

          <div className="d-flex text-md-right">
            <p className="p-3" href="ss">
              Login ?
            </p>
            <p className="p-3" href="ss">
              Resend Otp ?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpVerify;
