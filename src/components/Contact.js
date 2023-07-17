import React from "react";
import "./Contact.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
const Contact = () => {
  return (
    <div className="ContactMain">
      <h1 className="h1" data-aos="fade-left">
        Contact
      </h1>
      <div className="ContactMain1">
        <div className="ContactMain2">
          <form data-aos="fade-up-right">
            <input type="text" placeholder="Enter name" />
            <input className="email" type="email" placeholder="Enter Email" />

            <div className="ContactNested">
              <input
                className="subject"
                type="text"
                placeholder="Enter Subject"
              />
              <textarea className="textarea" cols="30" rows="10" />
              <button type="submit" className="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="location" data-aos="fade-up-left">
          <AddLocationAltIcon />
          <p>647,veerapandiya kattabomman street,periyakalthampadi vilage,</p>
          <p>Tiruvannamalai-606706.</p>
          <div className="phoneIcon">
            <PhoneIphoneIcon sx={{ marginTop: "5px" }} />
            <p className="p11">+91 8098252042</p>
          </div>
          <div className="emailIcon">
            <MailIcon sx={{ marginTop: "10px" }} />
            <p className="p11">govindharaj027@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
