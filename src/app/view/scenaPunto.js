import React from "react";
import MapJPG from "../assets/images/map.png";

const ScenaPunto = () => {
  return(
    <div className="a-bcg-body">
      
      <h3 className="a-title"> 
        return-to-model
      </h3>
      
      <div className="container">
        <div className="row">
          <h3 className="title">
            What was Stonehenge for?
          </h3>
        </div>
      </div>

      <img src={MapJPG} className="img-position" />
     
      
      <p className="txt-position">
        The original axis of the site is oriented towards the dawn of the summer solstice and the first lights of dawn hit the Altar stone in the stone circle.
      In the same way, looking from the inside out, the sunset of the winter solstice is framed and the last sunlights hit the Altar stone. 
      </p>

      <p className="txt-position">
        The solstices were often associated with the ideas of renewal and rebirth, and it seems reasonable to assume that the religious ceremonies took place within the stone circle.
      </p>

      <p className="n-position">
        1/3
      </p>
      
    </div>
  )
}

export default ScenaPunto;