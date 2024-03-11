import "./price.css";

const Price = () => {
  return (
    <>
      <h1 className="headerP">Pricing</h1>
      <p className="headerM">
        Choose the your price and while having fun keep your health
      </p>
      <div className="price-container">
        <div className="leftPrice">
          <span className="basic">Juniors</span>
          <h1 className="pricPreMonth">Age</h1>
          <h1 className="ageFees">Total Fee</h1>
          <hr className="rounded"></hr>
          <p className="age">Up to 10 years</p>
          <p className="price">
            € 92<span>/Month</span>
          </p>
          <hr className="rounded"></hr>
          <p className="age">11 to 13 years</p>
          <p className="price">
            € 100<span>/Month</span>
          </p>
          <hr className="rounded"></hr>
          <p className="age">14 to 17 years</p>
          <p className="price">
            € 113<span>/Month</span>
          </p>
          <hr className="rounded"></hr>
          <button className="priceBtn">Join Now</button>
        </div>
        <div className="centerPrice">
          <span className="basic">Seniors</span>
          <h1 className="pricPreMonth">Age</h1>
          <h1 className="ageFees">Total Fee</h1>
          <hr className="rounded"></hr>
          <p className="age">18 to 20 years</p>
          <p className="price">
            € 160<span>/Month</span>
          </p>
          <hr className="rounded"></hr>
          <p className="age">21 to 23 years</p>
          <p className="price">
            € 180<span>/Month</span>
          </p>
          <hr className="rounded"></hr>
          <p className="age">24 years and Older</p>
          <p className="price">
            € 210<span>/Month</span>
          </p>
          <hr className="rounded"></hr>
          <button className="priceBtn">Join Now</button>
        </div>
        <div className="rightPrice">
          <span className="basic">Family Discount</span>
          <h1 className="pricPreMonth">Age</h1>
          <h1 className="ageFees">Total Fee</h1>
          <hr className="rounded"></hr>
          <p className="age">For 4 People</p>
          <p className="price">
            € 220<span>/Month</span>
          </p>
          <hr className="rounded"></hr>
          <button className="priceBtnX">Join Now</button>
        </div>
      </div>
    </>
  );
};

export default Price;
