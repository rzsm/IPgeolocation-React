import React from "react";

export default function InfoCard(props) {
  return (
    <div className="card-container">
      <span className="info">Info</span>
      <img className="round" src={props.info.country_flag} alt={props.info.country} />
      <h3>{props.info.country}</h3>
      <h6>{props.info.city}</h6>
      <p>isp: {props.info.isp}</p>
      <div className="footer">
        <p>IP: {props.info.ip} </p>
        <p>latitude: {props.info.latitude} </p>
        <p>longitude: {props.info.longitude} </p>
      </div>
    </div>
  );
}
