import { Formik } from "formik";
import "./login.css";
const Login = () => {
  const url = "http://localhost:5000";

  const loginForm = {
    email: "",
    password: "",
  };

  const loginSubmit = (values) => {
    console.log(values);
    fetch(url + "/user/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status == 200) {
        console.log("loggedin");
        window.location.replace("/portfolio");
      } else {
        console.log("login failed");
      }
    });
  };

  return (
    <div className="login-container container-fluid">
      <div className="col-md-10 col-sm-10 mx-auto">
        <div className="my-card">
          <img className="form-logo" src="logos.png" alt="png" />

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
