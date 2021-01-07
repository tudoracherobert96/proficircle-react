import React, {useEffect, useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {data} from "../../data"

const Person = () => {
    const [name,setName] = useState("");
    const {id} = useParams();

    useEffect(() => {
        setName(data[id - 1].name);
    },[]);
    return (
        <div>
            <h1>Person page</h1>
            <p>{name}</p>
            <Link to="/people" className="btn">
                Back to People
            </Link>
        </div>
    );
};

export default Person;