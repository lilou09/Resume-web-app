import React from 'react';
import Picture from "../images/photo.jpg";
import {HashLink as Link} from "react-router-hash-link";


function Profile() {
    return (
        <>
            <div className='card'>
                <div className='card-image'>
                    <img className='activator' src={Picture} alt='mohamed' />
                    <Link className='btn-floating halfway-fab waves-effect wave-light red'>
                        <i className="material-icons activator">more_vert</i>
                    </Link>
                </div>
                <div class="card-content">
                    <span className='card-title activator grey-text text-darken-4'>
                        Mohamed <br/> Ali kacem
                    </span>
                    <p>Level Entry Web Developper</p>
                </div>
                <div className='card-reveal'>
                    <span className='card-title grey-text text-darken-4'>
                    <i className="material-icons right">close</i>
                    </span>
                    <p className="flex-container">
                        <i className="fab fa-facebook-f grey-text text-darken-4 social-style"></i>
                        <i className="fab fa-twitter grey-text text-darken-4 social-style"></i>
                        <i className="fab fa-instagram grey-text text-darken-4 social-style"></i>
                        <i className="fab fa-github grey-text text-darken-4 social-style"></i>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Profile
