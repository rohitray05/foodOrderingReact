import styles from '../../style.module.css'
import ShimmerUI from './Shimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import { useParams } from 'react-router-dom'

const RestaurantMenu = ()=>{

const {resId} = useParams()
const resInfo = useRestaurantMenu(resId)

return !resInfo?<ShimmerUI/>:
( 
  <div className={styles.menu}>
    <ul>
      {resInfo.map(item=>(
        <li key={item.id}>
            <div>Name: {item.name}</div>
            <div>Price: {item?.defaultPrice/100}</div>
            <div>Rating: {item?.ratings?.aggregatedRating?.rating}</div>
            <div>{item?.description}</div>
        </li>
      ))}
    </ul>
  </div>
)

}

export default RestaurantMenu