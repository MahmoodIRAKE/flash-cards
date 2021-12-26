import React from "react";
 import { Link } from "react-router-dom";

const Navbar=()=> {
  

    return (
        <>
        <div className="ui pointing menu">
        <Link to="/" className="item">
          Flash Cards
        </Link>
        <Link to="/manage-cards" className="item">
          Manage cards
        </Link>
     
      
    
      </div>
   
      
      </>
    );
  
}
export default Navbar