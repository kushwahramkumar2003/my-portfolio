import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { Link as Link2 } from "react-router-dom";
// import logo from "../../../assets/RKLogo11.png";
// import menu from "../../../assets/menu.png";
import "../Dashboard/dashboard.css";
import bg from "../../../assets/myPhoto.png";
const Profile = () => {
  // let [showMenu, setShowMenu] = useState();
  let [name, setName] = useState("Ramkumar Kushwah");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [Bg, setBg] = useState(bg);
  return (
    <div>
      <div>
        <div className="nameGroup">
          {/* <label>Name</label> */}
          <input
            type="text"
            value={name}
            className="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <button className="updateBtn">Update</button>
        </div>
        <div className="passwordGroup">
          <input
            type="password"
            value={password}
            className="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="password"
            value={confirmPassword}
            className="confirmPassword"
            placeholder="ConfirmPassword"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <br />
          <button className="updateBtn">Update</button>
        </div>
      </div>
      <div className="backgroundImg">
        <img src={Bg} alt="bg" />
        <input
          type="file"
          onChange={(e) => {
            setBg(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <br />
        <button className="updateBtn">Change</button>
      </div>
    </div>
  );
};

export default Profile;
