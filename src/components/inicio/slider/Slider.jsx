import iphone from "../../../assets/img/slider/iPhone.jpg";
import samsung from "../../../assets/img/slider/samsung.png";
import "./Slider.css";

const Slider = () => {
  return (
    <article>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              height={560}
              src={samsung}
              className="d-block w-100 img-slider"
              alt="samsung"
            />
          </div>
          <div className="carousel-item">
            <img
              height={560}
              src={iphone}
              className="d-block w-100"
              alt="iphone"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>{" "}
    </article>
  );
};

export default Slider;
