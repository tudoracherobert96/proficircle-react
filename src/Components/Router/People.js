import React,{useState} from 'react';
import {data} from '../../data'
import {Link} from 'react-router-dom'

const People = () => {
    const [people,setPeople] = useState(data);
    return (
        <div>
            <h1>People page</h1>
            {
                people.map((person) => {
                    return(
                        <div key={person.id} className="item">
                            <Link to={"/person/" + person.id}>{person.name}</Link>
                            <h2>test</h2>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default People;