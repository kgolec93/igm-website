import React from 'react'
import './Contact.scss'
import mapTemp from '../../assets/temp/map-temp.JPG'

export const Contact = () => {
    return (
        <div className='contactContainer'>
            <div className="dataContainer">
                <div className="items">
                    <h1>IGM Pracownia Projektowa</h1>
                    <p>ul. Wróblewskiego 29</p>
                    <p>53-513 Wrocław</p>
                    <p>NIP: 893-123-382</p>
                    <br />
                    <p>biuro@igmarchitekci.pl</p>
                    <p>+48 606 606 606</p>
                </div>
            </div>
            <div className="mapContainer">
                <img src={mapTemp} alt="" id="map" />
            </div>
        </div>
    )
}
