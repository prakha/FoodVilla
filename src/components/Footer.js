import React from "react";
import ReactDom from "react-dom/client";

import { useContext } from "react";
import UserContext from "../contexts/UserContexts";




const Footer = () => {
  const { user } = useContext(UserContext);
  return(
    <h4 className="p-10 m-10">

      This site is developed by {user.name} - {user.email}

    </h4>
  )
};

export default Footer;

