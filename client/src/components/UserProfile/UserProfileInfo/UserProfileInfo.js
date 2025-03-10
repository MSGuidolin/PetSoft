import React, { useEffect, useState } from "react";
import defaultImg from "../../../img/wall-cart.jpeg";
import { BsFillPlusCircleFill, BsPencilSquare } from "react-icons/bs";
import Form from "../Form/Form";
import FormImage from "../FormImage/FormImage";
import { useDispatch, useSelector } from "react-redux";
import "./UserProfileInfo.css";
import AccordionPrueba from "./AccordionPrueba";

function UserProfileInfo() {
  const [showModal, setShowModal] = useState(false);
  const [ImageModal, setImageModal] = useState(false);
  const [userID, setUserID] = useState("");
  const [change, setChange] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.data);

  useEffect(() => {
    if (window.localStorage.getItem("loggedPetSoftApp")) {
      const userData = JSON.parse(
        window.localStorage.getItem("loggedPetSoftApp")
      );
      if (userData.userFound.roles[0].name === "user") {
        setUserID(userData.userFound._id);
      }
    }
  }, []);

  return (
    <div>
      <div className="user-profile-info-container">
        <div className="profile-data">
          <div className="profile-img">
            <FormImage showModal={ImageModal} setShowModal={setImageModal} />
            <BsPencilSquare className="profile-icon2" onClick={setImageModal} />
            <img className="img" src={defaultImg} alt="Default Image"></img>
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-header">
            <h1>MIS DATOS</h1>
            <Form showModal={showModal} setShowModal={setShowModal} />
            <BsPencilSquare className="profile-icon" onClick={setShowModal} />
          </div>
          <p className="p">Nombre: {userData && userData.firstName}</p>
          <p className="p">Apellido: {userData && userData.lastName}</p>
          <p className="p">Correo Electrónico: {userData && userData.email}</p>
          <p className="p">Telefono: {userData && userData.phone}</p>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default UserProfileInfo;
