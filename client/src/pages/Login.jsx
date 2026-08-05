import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Save token
      localStorage.setItem("token", res.data.token);

      // Save logged-in user
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (err) {
      alert(
        err.response?.data?.message || "Login Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-5 col-md-7">

            <div className="login-card">

              <h2>Welcome Back ✈️</h2>

              <p>
                Login to continue your journey with
                <strong> TripVault</strong>
              </p>

              <form onSubmit={loginUser}>

                <div className="mb-3">

                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={changeHandler}
                    required
                  />

                </div>

                <div className="mb-4">

                  <label>Password</label>

                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={changeHandler}
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="btn login-btn w-100"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

              </form>

              <div className="text-center mt-4">

                Don't have an account?

                <Link
                  to="/register"
                  className="ms-2 text-decoration-none fw-bold"
                >
                  Register
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;