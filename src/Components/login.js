import { SwipeableDrawer, TextField } from "@mui/material";
import { Formik } from "formik";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { ProductContext } from "../productContext";
import "./login.css";
const Login = () => {
  const url = "http://localhost:5000";

  const [loggedin, setLoggedin] = useState(false)

  // const setLoggedin= useContext(ProductContext)

  const loginForm = {
    email: "",
    password: "",
  };

  const loginSubmit = (values) => {
    console.log(values);

    const reqOpt = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json",
      }
    }

    fetch(url+"/user/backendlogin", reqOpt)
    .then(res =>{
      if(res.status==200){
        console.log("login Success")
        res.json()
        .then((data) => {
          sessionStorage.setItem('user', JSON.stringify(data));
          setLoggedin(true);
        })

        Swal.fire({
          icon: 'success',
          title: 'success',
          text: 'loggedin successfully'
        })
      }else if (res.status==300){
        console.log("Login failed")
        Swal.fire({
          icon: "failed",
          title: "failed",
          text: "login failed"
        })
      }
    })

  }

 

  return (
    <div className="login-container container-fluid">
      <div className="col-md-10 col-sm-10 mx-auto">
        <div className="my-card">
          <img className="form-logo" src="onelink.png" alt="png" />
          <div class="image-back"></div>

          <div className="subheader">
            <h3>Welcome..!</h3>
            <span className="text-muted">Login to continue</span>
            {/* <span>SIGN UP</span> */}
          </div>

          <Formik initialValues={loginForm} onSubmit={loginSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <input
                  className="my-input"
                  type="text"
                  placeholder="Email"
                  id="email"
                  onChange={handleChange}
                  values={values.email}
                />
                <input
                  className="my-input"
                  type="text"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                  values={values.password}
                />

                <div className="remember">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>

                <button type="submit" className="my-btn">
                  Submit
                </button>
              </form>
            )}
          </Formik>

          <a href="/" className="link">
            Forgot Password
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
