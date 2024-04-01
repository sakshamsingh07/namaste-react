import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    
    const [reactbtnName , setreactbtnName]= useState("Login");
    //let btnName = "login";
    return(
        <div className="header-container">
            <div className="logo">
            <img className="headerlogo"src= {LOGO_URL} />
            </div>
            <div className="nav_item">
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sing In</li>
                    <li>Cart</li>
                    <button className="btn-header" 
                    onClick = {()=>{
                        reactbtnName === "Login" ? setreactbtnName("Logout") : setreactbtnName("Login");
                        }} 
                        >
                         {reactbtnName}
                         </button>

                </ul>

            </div>
        </div>
    )
}

export default Header ;