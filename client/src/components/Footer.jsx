import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-white mt-5"
      style={{
        background: "#0d1b2a"
      }}
    >
      <div className="container py-5">

        <div className="row">

          <div className="col-md-4">

            <h3>TripVault ✈️</h3>

            <p>
              Plan your dream vacations with an easy,
              secure and beautiful travel planner.
            </p>

          </div>

          <div className="col-md-4">

            <h4>Quick Links</h4>

            <ul className="list-unstyled">

              <li>Home</li>
              <li>Dashboard</li>
              <li>Create Trip</li>
              <li>My Trips</li>

            </ul>

          </div>

          <div className="col-md-4">

            <h4>Follow Us</h4>

            <FaFacebook size={30} className="me-3" />

            <FaInstagram size={30} className="me-3" />

            <FaTwitter size={30} className="me-3" />

            <FaGithub size={30} />

          </div>

        </div>

        <hr />

        <p className="text-center">
          © 2026 TripVault | Designed by Gnaneshwari
        </p>

      </div>
    </footer>
  );
}

export default Footer;