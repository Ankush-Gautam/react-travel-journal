import React from 'react';

function Card(props) {
    return (
        <div className="card container">

            <div className="card-img">
                <img src={props.imageUrl} alt={props.title} />
            </div>

            <div className="card-about">
                <h6 className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    {props.location}
                </h6>
                <a href={props.googleMapsUrl}>View in Google Maps</a>
                <h2 className='location-title'>{props.title}</h2>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-description">{props.description}</p>
            </div>

        </div>
    );
}

export default Card;
