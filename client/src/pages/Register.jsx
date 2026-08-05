import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert("Registration Successful");

      navigate("/login");

    } catch (err) {

      alert(
        err.response?.data?.message || "Registration Failed"
      );

    }
  };

  return (
    <div className="register-page">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-5 col-md-7">

            <div className="register-card">

              <h2>Create Account ✈️</h2>

              <p>
                Join <strong>TripVault</strong> and start planning your dream trips.
              </p>

              <form onSubmit={registerUser}>

                <div className="mb-3">

                  <label>Full Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    onChange={changeHandler}
                    required
                  />

                </div>

                <div className="mb-3">

                  <label>Email</label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    onChange={changeHandler}
                    required
                  />

                </div>

                <div className="mb-4">

                  <label>Password</label>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter password"
                    onChange={changeHandler}
                    required
                  />

                </div>

                <button className="btn btn-success w-100 register-btn">
                  Register
                </button>

              </form>

              <div className="text-center mt-4">

                Already have an account?

                <Link to="/login">
                  {" "}Login
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;