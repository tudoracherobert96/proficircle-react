import React, { useContext, useEffect, useState } from "react";
import { cities } from "../../cities";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { push, modify } from "../../Actions";

const CitiesList = () => {
  const redPeople = useSelector((state) => state.people);
  const dispatch = useDispatch();
  const [person, setPerson] = useState(null);
  const [people, setPeople] = useState(redPeople);
  const { id } = useParams();
  const [data, setData] = useState(cities);
  const [city, setCity] = useState(null);
  const [sector, setSector] = useState(null);
  const [zone, setZone] = useState(null);
  const [sectors, setSectors] = useState([]);
  const [zones, setZones] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const selectedPerson = redPeople.filter((person) => person.id == id);
      await setPerson(selectedPerson[0]);
      if (
        selectedPerson[0] &&
        selectedPerson[0].city &&
        selectedPerson[0].sector &&
        selectedPerson[0].zone
      ) {
        await setCity(selectedPerson[0].city);
        await setSector(selectedPerson[0].sector);
        await setZone(selectedPerson[0].zone);
        const newSectors = cities.filter(
          (city) => city.city == selectedPerson[0].city
        );
        await setSectors(newSectors[0].sectors);
        const newZones = newSectors[0].sectors.filter(
          (sector) => sector.name == selectedPerson[0].sector
        );
        await setZones(newZones[0].zones);
        console.log(
          selectedPerson[0].city,
          selectedPerson[0].sector,
          selectedPerson[0].zone
        );
        if (
          selectedPerson &&
          selectedPerson[0] &&
          selectedPerson[0].city &&
          selectedPerson[0].sector &&
          selectedPerson[0].zone
        ) {
          document.getElementById(selectedPerson[0].city).classList =
            "cities selectedBtn";
          document.getElementById(selectedPerson[0].sector).classList =
            "sectors selectedBtn";
          document.getElementById(selectedPerson[0].zone).classList =
            "zones selectedBtn";
        }
      }
    })();
  }, []);
  useEffect(() => {
    if (people && person) {
      let newPeople = people.map((x) => (x.id == person.id ? person : x));
      dispatch(modify(newPeople));
    }
  }, [person]);

  const updateCity = (elem) => {
    setSectors(elem.sectors);
    setZones([]);
    setCity(elem.city);
    setSector(null);
    setZone(null);
    document
      .querySelectorAll(".cities")
      .forEach((city) => (city.classList = "cities nonSelectedBtn"));
    document.getElementById(elem.city).classList = "cities selectedBtn";
  };
  const updateSector = (sector) => {
    setZone(null);
    setSector(sector.name);
    setZones(sector.zones);
    document
      .querySelectorAll(".sectors")
      .forEach((sector) => (sector.classList = "sectors nonSelectedBtn"));
    document.getElementById(sector.name).classList = "sectors selectedBtn";
  };
  const updateZone = (zone) => {
    setZone(zone);
    document
      .querySelectorAll(".zones")
      .forEach((zone) => (zone.classList = "zones nonSelectedBtn"));
    document.getElementById(zone).classList = "zones selectedBtn";
  };
  const savePerson = () => {
    if (city && sector && zone) {
      const newPerson = { ...person, city: city, sector: sector, zone: zone };
      //console.log(newPerson);
      setPerson(newPerson);
      //history.clear();
      setTimeout(() => {
        history.push("/people");
      }, 500);
      //history.goBack();
    } else {
      window.alert("Please select the city, sector and zone!");
    }
  };
  return (
    <div>
      <h1>Cities Component</h1>
      <h3>Select cities for {person && person.name ? person.name : ""}</h3>
      <div style={{ textAlign: "center", display: "flex" }}>
        <div style={{ flex: "1" }}>
          <h3>Cities</h3>
          <ul>
            {data.map((elem) => {
              return (
                <li
                  key={elem.city}
                  className="cities nonSelectedBtn"
                  id={elem.city}
                  onClick={() => updateCity(elem)}
                >
                  {elem.city}
                </li>
              );
            })}
          </ul>
        </div>
        <div style={{ flex: "1" }}>
          <h3>Sectors</h3>
          <ul>
            {sectors.map((sector) => {
              return (
                <li
                  key={sector.name}
                  className="sectors nonSelectedBtn"
                  id={sector.name}
                  onClick={() => updateSector(sector)}
                >
                  {sector.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div style={{ flex: "1" }}>
          <h3>Zones</h3>
          <ul>
            {zones.map((zone) => {
              return (
                <li
                  key={zone}
                  className="zones nonSelectedBtn"
                  id={zone}
                  onClick={() => updateZone(zone)}
                >
                  {zone}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <footer>
        <button className="btn" onClick={() => savePerson()}>
          Save
        </button>
        <Link to="/people" className="btn">
          Cancel
        </Link>
      </footer>
    </div>
  );
};

export default CitiesList;
