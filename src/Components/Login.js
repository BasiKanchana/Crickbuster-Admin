import React, { useState } from "react";
import LoginForm from "../Images/login-form.png";
import LoginFormLogo from "../Images/Logo.png";
// import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import { Formik, useFormik } from "formik";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const ResetPassword = () => {
    navigate("/Forgotpassword");
  };

  const LoginToDashboard = () => {
    navigate("/dashboard");
  };

  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //     console.log("data",e.target.value)
  //   };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("data2", e.target.value);
  };

  //   const login = async () => {
  //     try {
  //         const request = {
  //             emailId: formik.values.email,
  //             password: formik.values.password
  //         }
  //         // const response = await api.post(USER_LOGIN, request);
  //         if(response.status === 200 && response.data) {
  //              console.log("data",response.data)
  //              setEmail(formik.values.email)
  //              setPassword(formik.values.password)
  // navigate('/')
  //         }
  //     } catch (err) {
  //         toaster('error', err.response?.data?.message)
  //         console.log(err, "Error")
  //     }
  // };

  // const EmailRegex = /^[A-Za-z0-9._%+-]+@onpassive\.com$/;
  //     const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  //     const validationSchema = Yup.object().shape({
  //         email: Yup.string().required('This is Mandatory')
  //         .min(5,"Minimum 5 characters required")
  //         .max(64,"Maximum allowed characters are 64")
  //         .test("valid-description-whitespace","Too many white spaces are not allowed",
  //             (value) => {
  //               const consecutiveWhiteSpaces = value.match(/\s{2,}/g);
  //               return !consecutiveWhiteSpaces;
  //             })
  //         .matches(EmailRegex,"Only String + '@' Symbol and '.'are allowed"),

  //         password: Yup.string().required('This is Mandatory')
  //         .min(8,"Minimum 8 characters required")
  //         .max(32,"Maximum allowed characters are 32")
  //         .matches(PasswordRegex,"Password must contain atleast one Captial letter, number and a special character")
  //         .matches(/^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;"'-<>,.?~\\/-₹]+$/u,
  //         'Only Alphabet,Number,special characters are allowed')
  //     });
  //     const formik = useFormik({
  //         initialValues: {
  //             email: '',
  //             password: ''
  //         },
  //         onSubmit:login,
  //         validationSchema: validationSchema,
  //     });

  // const handleInputChange = (fieldName, value) => {
  //     formik.setFieldValue(fieldName, value);
  // };

  return (
    <div>
      <section className="d-flex">
        <div className="container-fluid">
          <div className="row p-0">
            <div className="col-lg-6 p-0">
              <img src={LoginForm} className="w-100 left-side-image" alt="" />
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column py-4">
              <div
                className="d-flex justify-content-center flex-column"
                style={{ width: "50%" }}
              >
                <img
                  src={LoginFormLogo}
                  alt=""
                  className="w-100 mb-5 p-0 m-0"
                />
                <Form className="w-100">
                  <h5 className="mb-4 fw-medium">DASHBOARD LOGIN</h5>
                  <FormGroup className="mb-3">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      name="email"
                      type="text"
                      className="loginFormInput"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email"
                      value={email}
                      //   onChange={e => {
                      //     handleInputChange('email', e.target.value);
                      // }}
                      // onBlur={formik.handleBlur}
                    />
                    {/* {formik.touched.email && formik.errors.email && (
                      <Form.Text className="text-muted">{formik.errors.email}{' '}</Form.Text>)} */}
                  </FormGroup>
                  <FormGroup className="mb-1">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      type="password"
                      className="loginFormInput"
                      aria-describedby="emailHelp"
                      placeholder="Enter Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </FormGroup>
                  <div className="d-flex justify-content-between">
                    <p className="text-danger">Invalid Password or Email</p>
                    <Button
                      variant="link"
                      className="mb-5 forgotPassword-btn"
                      onClick={ResetPassword}
                    >
                      Forget Password?
                    </Button>
                  </div>
                  <Button
                    className="btn login-form-btn form-control"
                    onClick={LoginToDashboard}
                  >
                    LOGIN
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
