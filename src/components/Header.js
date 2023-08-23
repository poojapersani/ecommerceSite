import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = ()=>{
    const Title = () => {
        return(
        <a href='/'><img  className = 'elogo' alt="ecommerce" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1bdzyqrOe4aGPlt8VlKWL45SWQvJdEkYDZuqyFEaUbs_MeOjePbrIHZEWsoydiOyjrg&usqp=CAU' /></a>
        )
    } 

    return(
        <div className="header">
            {<Title/>}
            <div className="nav-items">
                <ul className="nav-list">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                </ul>
            </div>
           
        </div>  
    )
}
export default HeaderComponent








