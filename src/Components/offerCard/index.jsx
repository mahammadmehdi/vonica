import React from "react";
import "./index.scss";

function OfferCard() {
  return (
    <div className="offerCards">
      <div className="bikeCard">
        
          <img
            src="https://vonica.novaworks.net/wp-content/uploads/2023/01/m1_banner_01.jpg"
            alt=""
          />
          <div className="left">
            <h3 className="text">25% OFFER ON HIKING BIKES</h3>
            <button className="btn">View Collection</button>
         
        </div>
      </div>
      <div className="helmetCard">
          <img
            src="https://vonica.novaworks.net/wp-content/uploads/2023/01/m1_banner_02.jpg"
            alt=""
          />
          <div className="right">
            <h3 className="text">OFFER IN ACCESSORIES</h3>
            <button className="btn">View Collection</button>
        </div>
      </div>
      <div className="handCard">
      
          <img
            src="https://vonica.novaworks.net/wp-content/uploads/2023/01/m1_banner_03.jpg"
            alt=""
          />
          <div className="left">
            <h3 className="text">CLASSIC BIKE COLLECTION</h3>
            <button className="btn">View Collection</button>
          
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
