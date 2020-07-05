import React from 'react'
import asdf from './Footer.module.css'

const Footer=(props) => {
  return (
  <div className={asdf.Footer}>
    <div className='container'>
      <div className={asdf.rows}>
          {/*col1*/}
          <div className={asdf.col}>
              <h5>Admins</h5>
              <div>
                <li>Comrade Ayush</li>
                <li>Comrade Yagnesh</li>
              </div>
          </div>
          {/*col2*/}
          <div className={asdf.col}>
              <h5>Add</h5>
              <div>
                <li>dggsg</li>
                <li>gsggsgr</li>
              </div>
          </div> 
          <div className={asdf.button}>
          <p>button ke jage pe logo dalega badme</p>
          <button onClick={()=> window.open("https://www.github.com")} >github</button>
          <button onClick={()=> window.open("https://www.facebook.com")} >facebook</button>
          <a href="https://github.com/slyfox-arc/slyfox-arc.github.io">slyfox-arc</a>
          </div>   
      </div>
      <div>
            &copy;{(new Date().getFullYear())} | All rights reserved with the demons | Terms of-- just kneel
      </div>
    </div>
  </div>
  )
}
export default Footer