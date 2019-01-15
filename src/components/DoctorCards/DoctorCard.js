import React from "react";
import "./DoctorCard.css";
import ".///doctors.json"; 

const DoctorCard = props => (
  <div className="col-md-3" >
 <div className="img-container">
      <a onClick={() => props.selectDoctor(props.name)}
        // className={props.Score === 0}
          >
              <img className="hvr-grow-shadow"alt={props.name} src={props.image} />
          </a>
      </div>
  </div>
);

export default DoctorCard;



