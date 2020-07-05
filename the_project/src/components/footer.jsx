import React from 'react'
import asdf from './Footer.module.css'

const Footer=(props) => {
  return (
  <div className={asdf.Footer}>
    <div className={asdf.container}>
      <div className={asdf.rows}>
        
        <ul className={asdf.col}>
          {/*<li><p>button ke jage pe logo dalega badme</p></li>*/}
          <li><button onClick={()=> window.open("https://www.github.com")} >GITHUB</button></li>
          <li><button onClick={()=> window.open("https://www.facebook.com")} >FACEBOOK</button></li>
          <li><a href="https://github.com/slyfox-arc/slyfox-arc.github.io">SLYFOX-ARC</a></li>
        </ul>
          
        <ul className={asdf.col}>
          <li><h4>Admins</h4></li>
          <li>Comrade Ayush</li>
          <li>Comrade Yagnesh</li>
        </ul>
          
        <ul className={asdf.col}>
          <li><h4>Add</h4></li>
          <li>dggsg</li>
          <li>gsggsgr</li>
        </ul> 
      </div>

      <div>
        &copy;{(new Date().getFullYear())} | All rights reserved with the demons | Terms of-- just kneel
      </div>
    </div>
  </div>
  );
}
export default Footer