import React from 'react';
import ReactDom from 'react-dom/client'
import logo from './assets/foodlogo.jpeg';
import meghnalogo from './assets/meghna.png'
import styles from './style.module.css';

//Old File Basic Concept later we Break this and form a better coding standard
const Header = () =>{
  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <img className={styles.logo_class} src={logo}/>
      </div>
      <div className={styles.nav_item}>
        <ul className={styles.header_list}>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

//const RestaurantCard = ({resName,cusine}) Destructuring On fly
const RestaurantCard = (props)=> {
  console.log(props) //const {resName,cusine} = props   same destructuring
  return ( <div className={styles.res_card}>
     <h3>{props.resName}</h3>
     <img className={styles.res_image}  src={meghnalogo}/>
     <h4>{props.cusine}</h4>
     <h4>4.4 star</h4>
     <h4>38 minutes</h4>
  </div>)
}

const RestaurantCardDynamic = (props)=> {
  //const {resName,cusine} = props   same destructuring
  const {resData} = props

  return ( <div className={styles.res_card}>
     <h3>{resData.name}</h3>
     <img className={styles.res_image}  src={meghnalogo}/>
     <h4>{resData.cuisines}</h4>
     <h4>{resData.ratings}</h4>
     <h4>{resData.delivery}</h4>
  </div>)
}


const resData = [{
  id:1,
  name:'ABC Restaurant',
  cuisines:'Sandwidth,Halwa',
  ratings:'4.6 star',
  delivery:'46 minutes'
},{
  id:2,
  name:'ABD Restaurant',
  cuisines:'Sandwidth,Halwa',
  ratings:'4.6 star',
  delivery:'46 minutes'
},{
  id:3,
  name:'ABE Restaurant',
  cuisines:'Sandwidth,Halwa',
  ratings:'4.6 star',
  delivery:'46 minutes'
},{
  id:4,
  name:'ABF Restaurant',
  cuisines:'Sandwidth,Halwa',
  ratings:'4.6 star',
  delivery:'46 minutes'
},{
  id:5,
  name:'ABG Restaurant',
  cuisines:'Sandwidth,Halwa',
  ratings:'4.6 star',
  delivery:'46 minutes'
}]

const Body = ()=>{
  return (
    <div className={styles.body}>
      <div className={styles.search}>Search</div>
      <div className={styles.res_cotainer}>
        <RestaurantCard resName="Meghna Foods" cusine="Biryani, Nort Indian, Asian"/>
        <RestaurantCard resName="KFC" cusine="Burger, Fast Food"/>
        <RestaurantCardDynamic resData={resData}/>
      </div>
    </div>
  )
}

const NewBody = ()=>{
  //We will use Map to return a looped RestaurantCard Component
  return (
    <div className={styles.body}>
      <div className={styles.search}>Search</div>
      <div className={styles.res_cotainer}>
       {
        resData.map(restaurant=><RestaurantCardDynamic key={restaurant.id}  resData={restaurant}/>)
       }
      </div>
    </div>
  )
}

const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      <NewBody/>
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)
