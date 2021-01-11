import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'

const Form = (props) => {
    const [message,setMessage] = useState(null);
    
    const saveForm = () => {
        const newMessage = document.getElementById("inputMessage").value;
        const newEmail = document.getElementById("inputEmail").value;
        if(newMessage.length > 0){
            if(validateEmail(newEmail)){
                setMessage({message:newMessage,email:newEmail});
                props.onChangeMessages({message:newMessage,email:newEmail});
            }else{
                window.alert("Incorrect email format!")
            }
        }else{
            window.alert("Please type a message!")
        }
    }
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    return (
        <div>
            <h1>Send us a message</h1>
            <input type="text" defaultValue="Message..." id="inputMessage" onFocus={() => document.getElementById("inputMessage").value = ""}/>
            <input type="text" defaultValue="example@domain" id="inputEmail" onFocus={() => document.getElementById("inputEmail").value = ""}/>
            <footer>
                <button className="btn" onClick={() => saveForm()}>Send</button>
            </footer>
        </div>
    );
};

export default Form;