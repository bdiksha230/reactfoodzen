import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {


    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollposition = window.scrollY;
            setIsSticky(scrollposition > 120);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <header className={isSticky ? 'sticky' : ''}>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container">
                    <NavLink to="/Home" className="navbar-brand logo" >FoodZen</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav />
                        {/* <form className="d-flex">
                            <NavLink to="/wishlist"> <button className="btn  " type="button"><span><i className="fa-solid fa-heart"></i></span></button></NavLink>
                            <button className="btn  " type="button"><span><i className="fa-solid fa-cart-plus"></i></span></button>
                            <NavLink to="/allproduct"> <button className="btn  " type="button">All</button></NavLink>
                        </form> */}
                    </div>
                </div>
            </nav>



        </header>
    )
}

export default Header
