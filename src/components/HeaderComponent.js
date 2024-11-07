import { useState } from 'react'
import HEADER_LOGO from '../../assets/foodlogo.jpeg'
import styles from '../../style.module.css'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'



const Header = () =>{
  let btnName = 'Login'
  const [btnNameReact,setBtnNameReact] = useState('Login')
  const onlineStatus = useOnlineStatus()
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg sticky">
      <div className="">
        <img className="w-56" src={HEADER_LOGO}/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className='px-4'>Online Status: {onlineStatus? '✅' : '🔴' } </li>
          <li className='px-4'><Link to="/">Home</Link></li>
          <li className='px-4'><Link to="/about">About Us</Link></li>
          <li className='px-4'><Link to="/contact">Contact Us</Link></li>
          <li className='px-4'><Link to="/cart">Cart</Link></li>
          <li className='px-4'><Link to="/grocery">Grocery</Link></li>
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