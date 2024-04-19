import React from "react";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/productPage");
    }, 2000);
  };
  return (
    <div className="container height-100 d-flex justify-content-center align-items-center">
      <div className="position-relative">
        <div className="card p-2 text-center">
          <h6>
            Please enter the one time password <br /> to verify your account
          </h6>
          <div>
            <span>A code has been sent to</span>
            <small>Task**7676@gmail.com</small>
          </div>
          <form onSubmit={handelSubmit}>
            <div id="otp">
              <input
                className="m-2 text-center form-control rounded "
                type="text"
                minLength={4}
                maxLength={4}
                required
              />
              <p>Enter Random 4 digit code</p>
            </div>
            <div className="mt-4">
              <button className="btn btn-danger px-4 validate" type="submit">
                Validate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
