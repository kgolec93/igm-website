import React from 'react'
import './Contact.scss'
import mapTemp from '../../assets/temp/map-temp.JPG'
import logoBK from '../../assets/logo-bk.svg'
import GoogleMapReact from 'google-map-react';


const Marker = ({ text }) =>
    <svg width="32" height='32'>
        <circle cx="16" cy="16" r="10" stroke="red" strokeWidth="10" fill="none" />
    </svg>;

export const Contact = () => {
    return (
        <div className='contactContainer'>
            <div className="dataContainer">
                <div className="items">
                    <div className="logoContainer">
                        <img src={logoBK} alt="igm-logo" />
                        <h1>IGM_Architekci</h1>
                    </div>
                    <p>ul. Wróblewskiego 29</p>
                    <p>53-513 Wrocław</p>
                    <p>NIP: 893-123-382</p>
                    <br />
                    <p>biuro@igmarchitekci.pl</p>
                    <p>+48 606 606 606</p>
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
