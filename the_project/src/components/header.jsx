import React, { Component } from 'react';
import styles from './Header.module.css'

class HeaderComponent extends Component {
    state = {  }
    render() { 
        return (  
            <div className={styles.outerdiv}> 
                <ul className={styles.list}>
                    <li className={styles.firstelement}><a href="#"><span>SLYFOX-ARC</span></a></li>
                    <li><a href="#"><span>HOME</span></a></li>
                    <li><a href="#"><span>PROFILE</span></a></li>
                    <li><a href="#"><span>CONTACT</span></a></li>
                    <li><a href="#"><span>ABOUT</span></a></li>
                </ul>

            </div>
        );
    }
}
 
export default HeaderComponent;