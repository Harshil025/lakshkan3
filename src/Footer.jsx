import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
        <footer className='bg-light text-center'>
            <p> © {year} Laksh Kan. All Rights Reserved | Terms And Conditions </p>
        </footer>
        </>
    )
}

export default Footer;