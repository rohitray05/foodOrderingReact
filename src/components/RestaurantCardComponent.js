
import MEGHNA_LOGO from '../../assets/meghna.png'
import styles from '../../style.module.css'
import {cloudImage} from '../constants/constants'

const RestaurantCard = (props)=> {
  const {resData} = props
  const {name,cuisines,ratings,delivery} = resData;
  return ( <div className={styles.res_card}>
     <h3>{name}</h3>
     <img className={styles.res_image}  src={MEGHNA_LOGO}/>
     <h4>{cuisines}</h4>
     <h4>{ratings}</h4>
     <h4>{delivery}</h4>
  </div>)
}


export const SwiggyRestaurantCard = (props)=> {
  const {resData} = props
  const {name,cuisines,avgRating,sla,cloudinaryImageId} = resData;
  
  return ( 
  <div className="m-4 p-4 w-[200px] bg-gray-200 hover:bg-gray-400">
     <img className="rounded-lg "  src={cloudImage+cloudinaryImageId}/>
     <h3 className='font-bold py-1 text-lg'>{name}</h3>
     <h4 className='break-words'>{cuisines.join(',')}</h4>
     <h4>{avgRating}</h4>
     <h4>{sla?.deliveryTime} minutes</h4>
  </div>)
}

export default RestaurantCard