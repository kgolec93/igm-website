import React from 'react'
import './Contact.scss'
import IGM_Logo_Full from '../../assets/IGM_Logo_Full.png'
import mapMarker from '../../assets/igm-marker.svg'
import GoogleMapReact from 'google-map-react';


const Marker = ({ text }) =>
    <img src={mapMarker} alt="IGM Architekci" id="mapMarker"/>
    ;

export const Contact = () => {
    return (
        <div className='contactContainer'>
            <div className="dataContainer">
                <div className="items">
                    <div className="logoContainer">
                        <img src={IGM_Logo_Full} alt="IGM Architekci Wrocław" />
                        <h1>IGM Architekci</h1>
                    </div>
                    <p>ul. Wróblewskiego 29</p>
                    <p>53-513 Wrocław</p>
                    <p>NIP: 893-123-382</p>
                    <br />
                    <p>biuro@igmarch.pl</p>
                    <p>+48 71 780 41 28</p>
                </div>
            </div>
            <div className="mapContainer">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB0sH8MpWuRhUOfKHm7a2sJoD5ndKgYFok' }}
                    defaultCenter={{ lat: 51.104031, lng: 17.087235 }}
                    defaultZoom={15}
                >
                    <Marker
                        lat={51.104031}
                        lng={17.087235}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}
