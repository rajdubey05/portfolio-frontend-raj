import "./signup.css";
import { Button, TextField } from "@mui/material";

const SignUp = () => {
  return (
    <div class="container mt-5">
      <div class="card">
        <div class="row">
          <div class="col-md">
            <div class="img-back"></div>
          </div>

          <div class="col-md">
            <div class="card-body my-card-body">
              <p class="h3">Hi</p>
              <p class="text-muted">Sign Up to Continue</p>

              <hr />

              <form>
                <TextField
                  className="w-100 mt-5"
                  variant="filled"
                  id="email"
                  type="email"
                  label="Email Address"
                />

                <label for="fullname" class="mt-3">
                  Full Name
                </label>
                <TextField
                  id="fullname"
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                />

                <label for="password" class="mt-3">
                  Password
                </label>
                <TextField
                  id="password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />

                <Button color="primary" variant="contained" className="mt-5 w-50">
                  Sign Up
                </Button>

                <a
                  href="/"
                  class="text-muted mt-5"
                  style={{ display: "block" }}
                >
                  Already Have an account?
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
