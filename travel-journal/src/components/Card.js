import React from "react";

export default function App(props) {
  return (
    <div className="card">
      <div className="card__left">
        <img src={props.imageUrl} alt="" className="img"/>
      </div>
      <div className="card__right">
        <div className="card__location">
          <div className="location"><i className="fa-solid fa-location-dot location-pin"></i> {props.location.toUpperCase()}</div>
          <div className="">
            <a href={props.googleMapsUrl} className="card__location-link">View on Google Maps</a>
          </div>
        </div>
        <h1>{props.title}</h1>
        <div className="duration">{props.startDate} - {props.endDate}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  )
}