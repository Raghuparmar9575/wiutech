import React from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import Forms from "../Components/FormCom";
import { useFormik } from "formik";
import { LoginSchema } from "../Components/Schema";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  let [arr, setarr] = useState(() => {
    let data = localStorage.getItem("TASK");
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        const NewArry = arr.filter((items) => {
          return (
            values.email === items.email && values.password === items.password
          );
        });
        action.resetForm();
        console.log("new data :", NewArry);
        if (NewArry.length > 0) {
          toast.success("LOGIN SUCCESSFULL");
          setTimeout(() => {
            setButtonDisabled(false);
            navigate(`/otpPage`);
          }, 2000);
          setButtonDisabled(true);

          localStorage.setItem("TASK", JSON.stringify(NewArry));
        } else {
          toast.error("Invalid Email Or Password");
        }
      },
    });
  return (
    <Container className="form-container">
      <div className="login-form">
        <ToastContainer position="top-center" />
        <Row className="justify-content-center align-items-center">
          <Col>
            <Form noValidate onSubmit={handleSubmit} className="form">
              <h2>Login</h2>
              <p>
                Doesn't have an account? <Link to="/signup">Signup</Link>
              </p>
              <Forms
                label="Email Address"
                type="email"
                name="email"
                value={values.email}
                placeholder="Enter Email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.email && errors.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null
                }
              />

              <Forms
                label="Password"
                type="password"
                name="password"
                value={values.password}
                placeholder="Enter password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.password && errors.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null
                }
              />
              <Link className="forgot-link mt-3">Forgot Password</Link>

              <Button
                variant="primary mt-3 "
                className="btn"
                type="submit"
                disabled={isButtonDisabled}
              >
                Login
              </Button>

              <h6 className="text-center mt-3">
                ---------or login with---------
              </h6>
              <br />
              <Row className="row justify-content-center">
                <Col>
                  <Button className="login-btn" variant="outline-danger">
                    <FaGoogle /> &nbsp; Google
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-primary " className="login-btn">
                    <FaFacebookF />
                    Facebook
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col className="col-img"></Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
