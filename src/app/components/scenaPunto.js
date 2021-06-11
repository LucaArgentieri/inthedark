import React from "react";
import { Link } from "react-router-dom";

const ScenaPunto = ({title, image, desc1, desc2, number}) => {
  return(
    <div className="a-bcg-body flex flex_center flex_column">
      
      <Link to="/select"> 
        <h3 className="a-title nobleman regular">Meglio pulsante di close?</h3>
      </Link>
      
      <div className="container">
        <div className="row">
          <h3 className="title nobleman bold fs-36 upcase">
            {title}
          </h3>
        </div>
      </div>

      <img src={image} className="img-position" />
     
      
      <p className="txt-position athiti medium">
        {desc1}
      </p>

      <p className="txt-position athiti medium">
        {desc2}
      </p>

      <p className="n-position athiti medium">
        {number}
      </p>
      
    </div>
  )
}

export default ScenaPunto;