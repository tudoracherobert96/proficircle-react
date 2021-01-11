import React,{ useContext, useEffect, useState} from 'react';
import {cities} from '../../cities'
import {Link,useParams, useHistory} from 'react-router-dom'

const CitiesList = (props) => {
    const [person,setPerson] = useState(null);
    const [people,setPeople] = useState(props.data);
    const {id} = useParams();
    const [data,setData] = useState(cities);
    const [city,setCity] = useState(null);
    const [sector,setSector] = useState(null);
    const [zone,setZone] = useState(null);
    const [sectors,setSectors] = useState([]);
    const [zones,setZones] = useState([]);
    const history = useHistory();

    useEffect(async () => {
        console.log(props.data);
        console.log(cities);
        const selectedPerson = props.data.filter((person) => person.id == id);
        console.log(selectedPerson[0]);
        setPerson(selectedPerson[0]);
        if(selectedPerson[0] && selectedPerson[0].city && selectedPerson[0].sector && selectedPerson[0].zone){
            await setCity(selectedPerson[0].city);
            await setSector(selectedPerson[0].sector);
            await setZone(selectedPerson[0].zone);
            const newSectors = cities.filter((city) => city.city == selectedPerson[0].city);
            await setSectors(newSectors[0].sectors);
            const newZones = newSectors[0].sectors.filter((sector) => sector.name == selectedPerson[0].sector);
            await setZones(newZones[0].zones);
            console.log(selectedPerson[0].city,selectedPerson[0].sector,selectedPerson[0].zone);
            document.getElementById(selectedPerson[0].city).style.color = "blue";
            document.getElementById(selectedPerson[0].sector).style.color = "blue";
            document.getElementById(selectedPerson[0].zone).style.color = "blue";
            
        }
    },[])
    useEffect(() => {
        if (people && person){
            let newPeople = people;
            newPeople = newPeople.map((x) => x.id == person.id ? person : x);
            props.onChangePeople(newPeople);
        }
    },[person])
    
    const updateCity = (elem) => {
        setSectors(elem.sectors);
        setZones([]);
        setCity(elem.city);
        setSector(null);
        setZone(null);
        document.querySelectorAll(".cities").forEach((city) => city.style.color = "black");
        document.getElementById(elem.city).style.color = "blue";
    }
    const updateSector = (sector) => {
        setZone(null);
        setSector(sector.name);
        setZones(sector.zones)
        document.querySelectorAll(".sectors").forEach((sector) => sector.style.color = "black");
        document.getElementById(sector.name).style.color = "blue";
    }
    const updateZone = (zone) => {
        setZone(zone);
        document.querySelectorAll(".zones").forEach((zone) => zone.style.color = "black");
        document.getElementById(zone).style.color = "blue";
    }
    const savePerson = () => {
        if(city && sector && zone){
            const newPerson = {...person,city:city,sector:sector,zone:zone};
            console.log(newPerson);
            setPerson(newPerson);
            history.goBack();
        }else{
            window.alert("Please select the city, sector and zone!");
        }
    }
    return (
        <div>
            <h1>Cities Component</h1>
            <h3>Select cities for {
                person && person.name ? person.name : ""
            }</h3>
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
            <footer>
                <button className="btn" onClick={() => savePerson()}>Save</button>
                <Link to="/people" className="btn">Cancel</Link>
            </footer>
        </div>
    );
};

export default CitiesList;