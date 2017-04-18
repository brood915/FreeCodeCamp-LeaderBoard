import React from 'react';
import styles from '../style/main.scss';

function Header(props) {
    return (<header>
          <img className={styles.logo} src="https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.svg" alt="FFCLogo" />
        </header>);
}


export default Header;