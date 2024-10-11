//This will be class based Component
import { Component } from 'react'
import styles from '../../style.module.css'
import User from './User'
import UserClass from './UserClass'

// const About = ()=> {
//   return (
//   <div>
//     <User name={"Rohit(function)"} location={"Jamshedpur(function)"}/>
//     <UserClass name={"Rohit(class)"} location={"Jamshedpur(class)"}/>
//   </div>)
// }

class About extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log("Parent's Component did Mount")
  }

  render(){
    return (
        <div>
          <User name={"Rohit(function)"} location={"Jamshedpur(function)"}/>
          <UserClass name={"Rohit(class)"} location={"Jamshedpur(class)"}/>
        </div>)
  }
}

export default About