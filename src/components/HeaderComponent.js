import { useState } from 'react'
import HEADER_LOGO from '../../assets/foodlogo.jpeg'
import styles from '../../style.module.css'
import { Link } from 'react-router-dom'



const Header = () =>{
  let btnName = 'Login'
  const [btnNameReact,setBtnNameReact] = useState('Login')
  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <img className={styles.logo_class} src={HEADER_LOGO}/>
      </div>
      <div className={styles.nav_item}>
        <ul className={styles.header_list}>
          <li>Home</li>
          <li><Link to="/about">About Us</Link></li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className={styles.login_button} onClick={
            ()=>{
              btnNameReact === 'Login' ? 
              setBtnNameReact('Logout'):
              setBtnNameReact('Login')
            }
          }>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header