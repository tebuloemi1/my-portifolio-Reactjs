import React from 'react';
import"./contact.css";
import Phone from "../../img/Phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import reactDom from 'react-dom';
import { useRef,useState } from 'react';
import emailjs from "emailjs";
import { ThemeContext } from "../../context";




const  Contact = () => {
 const formRef = useRef();
  const [done,setDone] = useState(false)
  const  theme= useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
   const handleSubmit = (e) => {
    e.preventDefault(); 
    
    emailjs
    .sendForm(
  "service_rrvnznco" ,
 "template_3v5nih4",
 formRef.current, "user_DrriDPTGKO2Zj4RDXCA6W"
 )
    .then(
      (result)  => {
          console.log(result.text);
          setDone(true)
      },
(error) => {
    console.log(error.text);
}
    )
   }

    return (
        <><div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper"></div>
            <div className="c-left"></div>
            <h1 className="c-title"> lets discuss your project</h1>
            <div className="c-info"></div>
            <div className="c-info-item"></div>
            <img src={Phone} alt="" className="c.icon"> 412 915 6245</img>

            <div className="c-info-item"></div>
            <img className="c.icon" src {...Address} alt="" /> 1145 green Tree Rd pittsburgh pa 15220.

        </div><div className="c-right"></div><p className="c-desc"> <b> get in touch. Always freelancing if the right project comes along.
        </b></p><form ref={formRef} onSubmit={handleSubmit}>
                <input style={{ backgroundColor: darkMode && "black" }} type="text" placeholder="Name" name="user_name" />
                <input style={{ backgroundColor: darkMode && "black" }} type="text" placeholder="Subject" name="user_subject" />
                <input style={{ backgroundColor: darkMode && "black" }} type="text" placeholder="Email" name="user_email" />
                <input style={{ backgroundColor: darkMode && "black" }} type="text" placeholder="Name" name="user_name" />
                <textarea {...{ backgroundColor: darkMode && "black" }} rows="5" placeholder="message" name="message"></textarea>
                <button>Submit</button>
                {done && "Thank you..."}
            </form></>

    )
}

export default Contact
