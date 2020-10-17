import React from 'react'
import Password from './Password';
import './PasswordManager.css';

export default function PasswordManager() {
    return (
        <div className="manager-container">
            <div className="search-bar">
                <input type="search" placeholder="Search"/>
                <button className="button search-button"><i className="fa fa-search"></i></button>
            </div>
            <div className="password-list">
                <Password site="site1" password="pass1"/>
                <Password site="site2" password="pass2"/>
                <Password site="site3" password="pass3"/>
            </div>
        </div>
    )
}
