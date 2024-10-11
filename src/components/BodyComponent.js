import {resDataAPi} from '../utils/mockData'
import styles from '../../style.module.css'
import RestaurantCard,{SwiggyRestaurantCard} from './RestaurantCardComponent'
import { useEffect, useState } from 'react'
import ShimmerUI from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Body = ()=>{
  //Local Satte Variable - Super powerful variable
  //Local to this function
  const SWIGGY_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
  const [listOfRestaurants,setListOfRestaurants] = useState([]); //This is how we create State Variable
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  //Use Effect is called after the component Renders
  //Once the Render Cycle Completes the useEffect is called  
  useEffect(()=>{
    console.log('use Effect is called after Rendering')
    fetchData()
  },[]) //first Argument is call back, and 2nd is dependency array

  //We will use Map to return a looped RestaurantCard Component
  //let display = resData;
  const fetchData = async ()=>{
    const data = new Promise((resolve,reject)=>{setTimeout(()=>{resolve(resDataAPi)},1000)})

    data.then(re=>{
      console.log(re.data)
      //setListOfRestaurants(re.data);
      //setFilteredRestaurant(re.data);
    })

    try{
    const realData = await fetch(SWIGGY_URL);
    const newData = await realData.json();
    const resData = newData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(res=>res.info)
    console.log(resData);
    setListOfRestaurants(resData);
    setFilteredRestaurant(resData);
    }catch(e){
      data.then(re=>{
      console.log(re.data)
      setListOfRestaurants(re.data);
      setFilteredRestaurant(re.data);
    })
    }
    
  }

  //This is Conditional Rendering
  // if(!listOfRestaurants.length){
  //  return <ShimmerUI/>
  // }
  const [searchText,setSearchText] = useState('')
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return (<h1>You are Offline, Please Check your Internet</h1>)
    
  return !listOfRestaurants ? <ShimmerUI/> : (
    <div className={styles.body}>
      <div className={styles.search}>
        <input type='text' value = {searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button onClick={()=>{
         const filteredList = listOfRestaurants.filter(res=>res.name.toLowerCase().includes(searchText.toLowerCase()))
         setFilteredRestaurant(filteredList)
        }}>Search</button>
      </div>
      <div className={styles.filter}>
        <button className={styles.filter_btn} onClick={()=>{
          const filteredList = listOfRestaurants.filter(res=>+res.avgRatingString > 4)
          setFilteredRestaurant(filteredList)
        }}
        onMouseOver={()=>{console.log('On Mouse over')}}
        >To Rated Restaurant</button>
        <button className={styles.filter_btn} onClick={()=>{
          setFilteredRestaurant(listOfRestaurants)
        }}>Reset To All Restaurant</button>
      </div>
      <div className={styles.res_cotainer}>
       {
        filteredRestaurant.map(restaurant=>
        <Link 
        key={restaurant.id} 
        to={"/restaurant/"+restaurant.id}>
          <SwiggyRestaurantCard  resData={restaurant}/></Link>
        )
       }
      </div>
    </div>
  )
}

export default Body