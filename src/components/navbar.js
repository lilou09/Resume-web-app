import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import MenuIcon from '@mui/icons-material/Menu';



function Navbar() {
    return (
        <>
            <nav className='light-blue darken-4 nav-extended'>
                <div className='container'>
                    <div className='nav-wrapper'>                   
                        <Link to ="/" className='brand-logo'>
                            My CV
                        </Link>
                        <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
                            <MenuIcon />
                        </Link>
                        <ul className='right hide-on-med-and-down'>
                            <li>
                                <Link to="/">
                                    <i className='fas fa-home'></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/Skills">
                                    <i className='fas fa-copy'></i> Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="/Experience">
                                    <i className='fas fa-id-badge'></i> Experience
                                </Link>
                            </li>
                            <li>
                                <Link to="/Education">
                                    <i className='fas fa-graduation-cap'></i> Education
                                </Link>
                            </li>
                            <li>
                                <Link to="/Portfolios">
                                    <i className='fas fa-address-card'></i> Portfolios
                                </Link>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </nav>
            <ul className='sidenav' id='mobile-demo'>
                            <li>
                                <Link to="/">
                                    <i className='fas fa-home'></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/Skils">
                                    <i className='fas fa-copy'></i> Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="/Experience">
                                    <i className='fas fa-id-badge'></i> Experience
                                </Link>
                            </li>
                            <li>
                                <Link to="/Education">
                                    <i className='fas fa-graduation-cap'></i> Education
                                </Link>
                            </li>
                            <li>
                                <Link to="/Portfolios">
                                    <i className='fas fa-address-card'></i> Portfolios
                                </Link>
                            </li>
                        </ul>
            

            
        </>
    )
}

export default Navbar
