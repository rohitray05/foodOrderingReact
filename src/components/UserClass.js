import React from 'react';
import styles from '../../style.module.css'
//This is Class Based Component

//extends React.Component 
class UserClass extends React.Component{
  //Class based coponent return  a render method
  constructor(props){
   super(props)
   this.state = {
    count:0,
    count2:0,
    name:'',
    location:'',
    company:'',
    public_repos:0
   }  
  }
  
  async componentDidMount(){
    console.log('This is Child Component Did Mount')
    //This is used for API call
    const data = await fetch('https://api.github.com/users/rohitray05')
    const res  = await data.json();
    console.log(res)
    this.setState({
      name:res.name,
      location:res.location,
      company:res.company,
      public_repos:res.public_repos
    })

    this.intr = setInterval(()=>{
      console.log('Exeriment Interval')
    },1000)
  }

  componentDidUpdate(prevProps,previousState){
   console.log('This will be called after every Render')
   if(this.state.count != previousState.count||
    this.state.anotherStateVariable != previousState.anotherStateVariable){
    //then do something
    }

    if(this.state.count != previousState.count||
      this.state.anotherStateVariable != previousState.anotherStateVariable){
      //then do something else, 
      }

    } // Here in this if we write all possible cond to trigger API , hence multiple Condition

  componentWillUnmount(){
    //This is to clean up the component
    //clear intervals
    //clearTimeout
    clearInterval(this.intr)
  }

  render (){
   return(<div className={styles.user_card}>
    <h4>Count: {this.state.count}</h4>
    <h4>Count: {this.state.count2}</h4>
    <button onClick={()=>{
      this.setState({
        count:this.state.count+1,
        count2:this.state.count2+1
      })
    }}>Click to + Class Count</button>
    <h2>Name: {this.state.name}</h2>
    <h3>Location: {this.state.location}</h3>
    <h4>Company: {this.state.company}</h4>
    <h4>Public Repos: {this.state.public_repos}</h4>
  </div>)
  }
}

export default UserClass;