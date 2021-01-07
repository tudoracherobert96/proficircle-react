import React, {useState, useEffect } from 'react'
import axios from 'axios'
//https://randomuser.me/api
const API = 'https://randomuser.me/api';

const IntTest = (props) => {
    const [counter,setCounter] = useState(0);
    const [userInfos,setUserInfos] = useState(props.userInfos);

    const fetchRandomData = () => {
        axios.get(API).then((res) => {
            const randomDataResults = res.data.results[0];
            setUserInfos([...userInfos,{
                name:randomDataResults.name.first + " " + randomDataResults.name.last,
                url:randomDataResults.picture.large
            }])
            return res;
        }).catch((err) => {
                console.log(err);
            })
    };

    useEffect(async () => {
        await fetchRandomData();
    },[]);

    useEffect(async () => {
        props.onChangeUserInfos(userInfos);
    },[userInfos]);

    return(
        <>
        <div>
            <h1>{counter}</h1>
            <button className="btn" onClick={() => setCounter(counter + 1)}>Increase</button>
            <button className="btn" onClick={() => fetchRandomData()}>Fetch Random Data</button>
            <div>
                {userInfos.map((userInfo) => {
                    return <div key={userInfo.url}>
                        <p>Name : {userInfo.name}</p>
                        <img src={userInfo.url} />
                    </div>
                })}
            </div>
        </div>
        </>
    )
}

export default IntTest;