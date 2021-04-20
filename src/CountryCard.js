import React from "react";

function CountryCard(props) {
  return (
    <div className="card w-100 m-1">
      <div className="card-body">
        <h5 className="card-title">
          <img
            src={props.flag}
            style={{ width: "20px" }}
            alt={`${props.name} flag`}
          />
          <span>
            <strong> {props.name}</strong>
          </span>
        </h5>
        <p className="card-text">
          <strong>Region: </strong>
          {props.region}
        </p>
      </div>
      {props.handleAddCountry ? (
        <button
          onClick={() =>
            props.handleAddCountry({
              name: props.name,
              flag: props.flag,
              region: props.region,
            })
          }
          className="btn btn-primary"
        >
          +
        </button>
      ) : (
        <button
          onClick={() => props.handleDelete(props.name)}
          className="btn btn-danger"
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default CountryCard;
