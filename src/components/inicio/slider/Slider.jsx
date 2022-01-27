import samsung from "../../../assets/img/slider/phones.png";

import "./Slider.css";

const Slider = () => {
  return (
    <article className="banner-container">
      <img
        height={560}
        src={samsung}
        className="d-block w-100 img-slider"
        alt="samsung"
      />
    </article>
  );
};

export default Slider;
