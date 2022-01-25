import "./Cards.css";
const Cards = () => {
  return (
    <div className="container-fluid">
      <div className="card-title">
        <h2>Ofertas!</h2>
      </div>
      <div className="card-container">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src="..." alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem at
              unde excepturi quasi repudiandae, nostrum voluptate. Aut tenetur
              vitae corrupti.
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src="..." alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem at
              unde excepturi quasi repudiandae, nostrum voluptate. Aut tenetur
              vitae corrupti.
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src="..." alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem at
              unde excepturi quasi repudiandae, nostrum voluptate. Aut tenetur
              vitae corrupti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
