import * as React from "react";

export default function SignInPage() {
  return (
    <div class="sidenav">
      <div class="login-img"></div>
      <div class="main">
        <div class="col-md-6 col-sm-12 inner-main">
          <div class="login-form">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-light">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
