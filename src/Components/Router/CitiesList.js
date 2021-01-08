import React,{useEffect, useState} from 'react';
import {cities} from '../../cities'

const CitiesList = () => {
    const [data,setData] = useState(cities);
    const [city,setCity] = useState(null);
    const [sector,setSector] = useState(null);
    const [zone,setZone] = useState(null);
    const [sectors,setSectors] = useState([]);
    const [zones,setZones] = useState([]);
    
    const updateCity = (elem) => {
        console.log(elem);
        setSectors(elem.sectors);
        setZones([]);
        setCity(elem.city);
        setSector(null);
        setZone(null);
        document.querySelectorAll(".cities").forEach((city) => city.style.color = "black");
        document.getElementById(elem.city).style.color = "blue";
    }
    const updateSector = (sector) => {
        console.log(sector);
        setZone(null);
        setSector(sector.name);
        setZones(sector.zones)
        document.querySelectorAll(".sectors").forEach((sector) => sector.style.color = "black");
        document.getElementById(sector.name).style.color = "blue";
    }
    const updateZone = (zone) => {
        console.log(zone);
        setZone(zone);
        document.querySelectorAll(".zones").forEach((zone) => zone.style.color = "black");
        document.getElementById(zone).style.color = "blue";
    }
    return (
        <div>
            <h1>Cities Component</h1>
            <div style={{textAlign:"center",display:"flex"}}>
                <div style={{flex:"1"}}>
                    <h3>Cities</h3>
                    <ul>
                        {
                            data.map((elem) => {
                                return <li key={elem.city} className="cities" id={elem.city} onClick={() => updateCity(elem)}>{elem.city}</li>
                            })
                        }
                    </ul>
                </div>
                <div style={{flex:"1"}}>
                    <h3>Sectors</h3>
                    <ul>
                        {
                            sectors.map((sector) => {
                                return <li key={sector.name} className="sectors" id={sector.name} onClick={() => updateSector(sector)}>{sector.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div style={{flex:"1"}}>
                    <h3>Zones</h3>
                    <ul>
                        {
                            zones.map((zone) => {
                                return <li key={zone} className="zones" id={zone} onClick={() => updateZone(zone)}>{zone}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CitiesList;