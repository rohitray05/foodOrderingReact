import { useEffect } from 'react'
import styles from '../../style.module.css'


const RestaurantMenu = ()=>{
useEffect(()=>{
  fetchMenu()
},[])

const fetchMenu = async ()=>{

}

return (
  <div className={styles.menu}>
    <h1>Name of Restaurant</h1>
    <h2>Menu</h2>
  </div>
)

}

export default RestaurantMenu