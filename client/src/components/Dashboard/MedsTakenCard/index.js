import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

function MedTakenCard() {
  return (
    <>
<h2 className="text-center mt-3 mb-3">Medications I've taken</h2>
    <div className="card mt-4">
      <div className="card-body">
        <h3 className="card-title text-center">Name of Drug: </h3>
      </div>
    </div>
</>
    )
}

export default MedTakenCard;