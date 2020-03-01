import React from 'react';
import styles from './Logo.css'
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={styles.Logo}>
        {/**burgerLogo here will in the end just receive the path of the image where webpack will copy it to */}
        <img src={burgerLogo} alt="logo-img"/>
    </div>
);

export default logo;