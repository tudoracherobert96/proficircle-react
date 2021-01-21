import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'

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
        <div textAlign="center">
            <h1>Send us a message</h1>
            <div style={{width:"100%"}}>
                <div style={{float:"left",width:"50%",textAlign:"right"}}>
                    <div className="item">
                        <b className="form">Message:</b>
                        <input className="form" type="text" defaultValue="Message..." id="inputMessage" onFocus={() => document.getElementById("inputMessage").value = ""}/>
                    </div>
                    <div className="item">
                        <b className="form">Email:</b>
                        <input className="form" type="text" defaultValue="example@domain" id="inputEmail" onFocus={() => document.getElementById("inputEmail").value = ""}/>
                    </div>
                </div>
                <div style={{float:"left",width:"50%",padding:"50px",textAlign:"left"}}>
                    <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>
            </div>
            
            <div style={{width:"100%"}}>
                <button className="btn" onClick={() => saveForm()}>Send</button>
                <Link to="/" className="btn">Home</Link>
            </div>
        </div>
    );
};

export default Form;