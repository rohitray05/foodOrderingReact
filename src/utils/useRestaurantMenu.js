//Job is to return Menu
import {SWIGGYRESDETAILSAPI} from '../constants/constants'
import { useEffect,useState } from 'react'

const useRestaurantMenu = (resId)=>{
  const [resInfo,setResInfo] = useState(null)
  
  useEffect(()=>{
    fetchMenu()
  },[])

  const fetchMenu = async ()=>{
    const res = await fetch(SWIGGYRESDETAILSAPI+`restaurantId=${resId}`)
    const data = await res.json();
    const menuItems = data.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(item=>item?.card?.info)
    //console.log(menuItems)
    setResInfo(menuItems)
    console.log(resInfo)
 }
  return resInfo;
}

export default useRestaurantMenu