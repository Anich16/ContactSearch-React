import React from 'react';
import style from "./Contact.module.css";

let Contact = (props) => {
    return (
        <li className={style.contactItem}>
            <div className={style.contactImg}>
                <img src={props.img} width="70" height="70" />
            </div>
            <div className={style.contactDescription}>
                <p className={style.contactName}>{props.name}</p>
                <p className={style.contactPhone}>{props.phone}</p>
            </div>
        </li>
    )
};

export default Contact;