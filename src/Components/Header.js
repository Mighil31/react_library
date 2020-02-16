import React from 'react';


function Header(props) {

    return (

        <div >
            <ul className="nav">
                <li><a href="about.asp">Library</a></li>
                <li onClick={() => props.formToggle()}><a>New Book</a></li>
            </ul> 
        </div>
        
    )

}

export default Header;