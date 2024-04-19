import React, { useEffect } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import Forms from "../Components/FormCom";
import { useFormik } from "formik";
import { SignupSchema } from "../Components/Schema";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Signup = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();
  let [arr, setarr] = useState(() => {
    let data = localStorage.getItem("TASK");
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    file: null,
    description: "",
    password: "",
    confirm_password: "",
    gender: "", // Added gender field to initialValues
    language: [], // Added language field to initialValues as an array
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: SignupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);
        setarr([...arr, values]);
        action.resetForm();
        setTimeout(() => {
          navigate("/");
        }, 1000);
      },
    });
  useEffect(() => {
    localStorage.setItem("TASK", JSON.stringify(arr));
  }, [arr]);
  return (
    <Container>
      <div className="login-form">
        <ToastContainer position="top-center" />
        <Col>
          <Form noValidate onSubmit={handleSubmit} className="form">
            <h2>Sign Up</h2>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
            <Row>
              <Forms
                label="Full Name"
                type="text"
                name="name"
                value={values.name}
                placeholder="Name goes here"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.name && errors.name ? (
                    <p className="form-error">{errors.name}</p>
                  ) : null
                }
              />
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
            </Row>
            <Row>
              <Forms
                label="Phone Number"
                type="tel"
                name="phone"
                value={values.phone}
                placeholder="Enter Mobile Number"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.phone && errors.phone ? (
                    <p className="form-error">{errors.phone}</p>
                  ) : null
                }
              />
              <Forms
                label="Address"
                type="text"
                name="address"
                value={values.address}
                placeholder="Enter Mobile Number"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.address && errors.address ? (
                    <p className="form-error">{errors.address}</p>
                  ) : null
                }
              />
            </Row>
            <Row>
              <Forms
                label="Upload Ph0to"
                type="file"
                name="file"
                value={values.file}
                placeholder="Enter Mobile Number"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.file && errors.file ? (
                    <p className="form-error">{errors.file}</p>
                  ) : null
                }
              />
              <Forms
                label="description"
                type="text"
                name="description"
                value={values.description}
                placeholder="description"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.description && errors.description ? (
                    <p className="form-error">{errors.description}</p>
                  ) : null
                }
              />
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="language">
                  <Form.Label>Languages</Form.Label> <br />
                  <Form.Check
                    inline
                    type="checkbox"
                    label="Hindi"
                    name="language"
                    value="hindi"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.language && errors.language ? (
                        <p className="form-error">{errors.language}</p>
                      ) : null
                    }
                  />
                  <Form.Check
                    inline
                    type="checkbox"
                    label="English"
                    name="language"
                    value="english"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.language && errors.language ? (
                        <p className="form-error">{errors.language}</p>
                      ) : null
                    }
                  />
                  <Form.Check
                    inline
                    type="checkbox"
                    label="German"
                    name="language"
                    value="german"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.language && errors.language ? (
                        <p className="form-error">{errors.language}</p>
                      ) : null
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label> <br />
                  <div className="d-inline-block mr-3">
                    {/* This div ensures the labels and radio buttons are inline */}
                    <Form.Check
                      inline
                      type="radio"
                      label="Male"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.gender && errors.gender ? (
                          <p className="form-error">{errors.gender}</p>
                        ) : null
                      }
                    />
                  </div>
                  <div className="d-inline-block">
                    <Form.Check
                      inline
                      type="radio"
                      label="Female"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.gender && errors.gender ? (
                          <p className="form-error">{errors.gender}</p>
                        ) : null
                      }
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Forms
                label="Create Password"
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
              <Forms
                label="Confirm Password"
                type="password"
                name="confirm_password"
                value={values.confirm_password}
                placeholder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirm_password && errors.confirm_password ? (
                    <p className="form-error">{errors.confirm_password}</p>
                  ) : null
                }
              />
            </Row>
            <Button
              variant="primary mt-3 "
              className="btn"
              type="submit"
              disabled={isButtonDisabled}
            >
              Sign Up
            </Button>
            <h6 className="text-center mt-3">
              ---------or login with---------
            </h6>
            <br />
            <Row className="row justify-content-center">
              <Col>
                <Button variant="outline-danger">
                  <FaGoogle /> &nbsp; Google
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary">
                  <FaFacebookF />
                  Facebook
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </div>
    </Container>
  );
};

export default Signup;
