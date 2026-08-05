import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaUserCircle,
  FaPlaneDeparture,
  FaWallet,
  FaMapMarkedAlt,
  FaSignOutAlt
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {

    const getProfile = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data);

      } catch (err) {

        console.log(err);

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

      }

    };

    getProfile();

  }, [navigate]);

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (
    <div className="dashboard">

      <div className="container">

        <div className="dashboard-top">

          <div>

            <h2>
              Welcome,
              <span className="text-primary">
                {" "}
                {user?.name || "Traveler"}
              </span>
              👋
            </h2>

            <p>
              {user?.email}
            </p>

          </div>

          <div>

            <FaUserCircle
              size={70}
              className="profile-icon mb-3"
            />

            <br />

            <button
              className="btn btn-danger"
              onClick={logout}
            >
              <FaSignOutAlt className="me-2" />
              Logout
            </button>

          </div>

        </div>

        <div className="row mt-5">

          <div className="col-md-4 mb-4">

            <div className="dashboard-card blue-card">

              <FaPlaneDeparture size={45} />

              <h3 className="mt-3">12</h3>

              <p>Total Trips</p>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="dashboard-card green-card">

              <FaWallet size={45} />

              <h3 className="mt-3">₹1,25,000</h3>

              <p>Total Budget</p>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="dashboard-card orange-card">

              <FaMapMarkedAlt size={45} />

              <h3 className="mt-3">8</h3>

              <p>Visited Places</p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;