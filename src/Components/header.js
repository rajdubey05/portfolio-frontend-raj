import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {Switch} from "@mui/material"
// import { ProductContext } from "../productContext";

const Header = (props) => {

    const [loggedin, setloggedin] = useState(true);
    // const {productData} = useContext(ProductContext)

    const displayLoggedIn = () => {
        if(loggedin){
            return(
                <>
                <li className="nav-item">
                     <NavLink className="nav-link" activeclassName="active" to="/signup">Signup</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink className="nav-link" activeclassName="active" to="/login">Login</NavLink>
                </li>
                
                
                </>

            )

        }else{
            return(
                <>
                  
                  <li className="nav-item">
                     <NavLink className="nav-link" activeclassName="active" to="/portfolio">Createportfolio</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink className="nav-link" activeclassName="active" to="/productlist">Browse Product</NavLink>
                </li>
                

                
                </>

            )

        }

    };

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">OneLink</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                     <NavLink className="nav-link" activeclassName="active" aria-current="page" to="/home">Home</NavLink>
                 </li>

                 {displayLoggedIn()}
                 
                <li className="nav-item">
                     <NavLink className="nav-link" activeclassName="active" to="/gallery">Gallery</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink className="nav-link" activeclassName="active" to="/eventhandling">Event Handling</NavLink>
                </li>
                <li className="nav-item">
                    <Switch value={props.darkMode} onChange={ (e, v) => props.setDarkMode(v)} />
                </li>
                <li className="nav-item">
                   {/* <button className="btn btn-dark">{productData.length}</button> */}

                </li>
               
               
                 <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
               
      </form>
    </div>
  </div>
</nav>
    )
}
export default Header;