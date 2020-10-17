import React from 'react'
import './PasswordManager.css';

export default function Password(props) {
    return (
        <div className="password-box">
            <textarea name="" id="" value={props.site} cols="30" rows="1" readOnly></textarea>
            <textarea name="" id="" value={process.env.NODE_ENV} cols="30" rows="1" readOnly></textarea>
        </div>
    );
}
