//This will be class based Component
import { useEffect, useState } from 'react'
import styles from '../../style.module.css'

const User = (props)=> {
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)
  const [userInfo,setUserInfo] = useState({
    name:'',
    location:'',
    company:'',
    public_repos:0,
  })

  useEffect(()=>{
    fetchUserData()

    return ()=>{
     console.log('This is the componentUnmount in Functional Component')
    }
  },[])
  
  const fetchUserData = async() =>{
    const data = await fetch('https://api.github.com/users/rohitray05')
    const res  = await data.json();
    setUserInfo({
      name:res.name,
      location:res.location,
      company:res.company,
      public_repos:res.public_repos
    })
  }
  

  return (  
  <div className={styles.user_card}>
    <h4>Count: {count}</h4>
    <h4>Count2: {count2}</h4>
    <button onClick={()=>{setCount(count + 1)}}>Click to + Count</button>
    <h2>Name: {userInfo.name}</h2>
    <h3>Location: {userInfo.location}</h3>
    <h4>Company: {userInfo.company}</h4>
    <h4>Public Repos: {userInfo.public_repos}</h4>
  </div>)
}

export default User