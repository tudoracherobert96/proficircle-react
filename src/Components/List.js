import React, { useState, useEffect } from 'react';
import listItems from "./listItems";

function List() {
    const [list,setList] = useState(listItems);

    const filterList = (parsed) => {
        var copyList = list.filter((item) => item !== parsed);
        setList(copyList);
    };

    const pushList = () => {
        setList([...list,document.getElementById("inputData").value]);
        document.getElementById("inputData").value = "";
    };
    return (
        <>
            <h2>Simple list</h2>
            {list.map((item,key) => {
                console.log(item);
                return <div key={item}>
                    {item}
                    <button onClick={() => filterList(item)}>Delete</button>
                </div>;
            })}
            <div>
                <input type="text" defaultValue="" id="inputData"/>
                <button onClick={() => pushList()}>Add</button>
            </div>
        </>
    );
}

export default List;
