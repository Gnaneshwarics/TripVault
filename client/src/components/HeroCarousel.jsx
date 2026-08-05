function HeroCarousel() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        <div className="carousel-item active">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
            className="d-block w-100"
            style={{ height: "650px", objectFit: "cover" }}
            alt="Beach"
          />

          <div className="carousel-caption">
            <h1>Discover Amazing Destinations</h1>
            <p>Plan your perfect vacation with TripVault.</p>
          </div>

        </div>

        <div className="carousel-item">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
            className="d-block w-100"
            style={{ height: "650px", objectFit: "cover" }}
            alt="Mountains"
          />

          <div className="carousel-caption">
            <h1>Adventure Awaits</h1>
            <p>Mountains, trekking and unforgettable memories.</p>
          </div>

        </div>

        <div className="carousel-item">

          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1600&auto=format&fit=crop"
            className="d-block w-100"
            style={{ height: "650px", objectFit: "cover" }}
            alt="Kerala"
          />

          <div className="carousel-caption">
            <h1>Explore Nature</h1>
            <p>Experience the beauty of every journey.</p>
          </div>

        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default HeroCarousel;