# Food Orderig App

Basic Design includes
Header [with logo Home About Cart]
Body [ Cards or Title & Search Bar]
Footer [ Links ]

# Card: Can have image , name and ratings etc all info

# Components:

- Header
  - Logo
  - Nav Items
- Body Component
  - Search
  - Restaurant Cards Container
- Footer
  - CopyRight
  - Links
  - Address
  - Contacts

# Styles in JSX

- Inline
  - have to create object style = {backgroundColor:'hexCode'}
  - <div style={style}></div>
  - or <div style={{backgroundColor:'hexCode'}}></div>
  - write style.module.css and import that as styles in ts file
  - use it like className={styles.any_Class_Name}

# passing Props to Component

- props: properties
- <component  prop1="" propw=""/>
- prop is an object
- const Coponent = (props)={} // This props is an object which will have all the data as key value pair.

# Config Driven UI: Web site Driven by Data , control UI using Data coming from UI

- Web site Driven by Data , control UI using Data coming from UI
- {resData.map(restaurant=><RestaurantCardDynamic key={restaurant.id}  resData={restaurant}>)}
- Unique Key is imp for each Prop with the component
- Map modifies and returns a new array and now this will be array of Components
- Key is important as if there is no key then react will have to rerender everything as it cannot uniquely identified, if key is present then, it will just render the extra prop.
- can use index as well but react says not to use index as its a bad practice.

# seperate Files for Seperate Component

- File Structure
- src folder is the main folder
- inside src folder we can create components folder
- src
  - components
    - DifferentComponent.js
  - constants
  - utils
    - mockData.js
  - app.js

# import and export

- default export

  - In file if one item requires to be exported it will be "export default exportableItem"
  - In importing we simply put "import exportableItem from 'path'"

- named exports
  - If we have to export multiple items then export const item1,export const item2
  - And import it as obj destructuring import {item1,item2} from path

# Button logic

- If we create a button tag and have a onClick={()=>{}} method insite curly braces
- The actual Data updates but the UI remains the same.
- To make Data and UI consistent
  - We make the JS object as State variable and upate states
  - React Hooks
    - Normal JS functions
    - Written inside React
      - Important Hooks
        - useState() - powerfull state and imported as Named Import from React
        - useEffect()
      - const [stateVariable,setStateVariable] = useState(defaultValue)
      - to Update the Variable we can use setStateVariable(newValue)
      - const [variable,anyFunctionName]
      - Naming convention we follow setVaiable name for the function name which is used for updating the state, we can keep anyname for this
      - React Re renders the component if the state variable is updated
      - React is fast because of faster DOM Manipulation.

# React important Concepts

- Reconciliation Algorithm/React Fiber
  - Reconciliation is the change in UI
  - React has a concept of Virtual DOM
  - Virtual DOM is the Representation of Actual DOM
  - Virtual DOM is an object representation of Actual DOM and it is a kind of nested Objects of React Elements.
  - Diff Algorithm : virtual Dom 1 -> after Click Event -> virtual DOM 2, Diff Algorithm will find the difference between the previous Virtual DOM and the new Virtual Dom and if there is a difference then it will update the actual DOM.
  - After React 16 React Fiber came out and its a new way of finding the difference and updating the DOM.
  - So whenever there is a chnage in Virtual Dom and setState is triggered React will find the diff between new Virtual DOM and the Old one and then update the Actual DOM if diffrence exists.
  - React Fibre Architecture: Read About It.
  - React is fast because efficient DOM Manipulation by use of Diff Algo and Virtual DOM Concepts.

# Exploring the World

- Everything about Micro Services
- Two ways to Render the Application
  - 1. LoadPage->make API call and wait-> Render Everything once we get the Data
  - 2. Load Page-> Render Page with no data-> Make API call -> Once API sends back the data re render the page.
  - 3. Better way is 2nd, initial Render with No data or skeleton and then slowly re render everything.
- useEffect for API call
- useEffect is called after the render cycle ends and then the callback function of useEffect is called

- Shimmer UI : Load a fake page untill the actual data loads rater than boading loading screen.

# state variable

- Normal Variable even though gets updated but the UI never Re render and we do not see change in UI
- When State Variable Changes React will re render the Component
- If a state variable gets updated , whole component will be re rendered which uses the state variable.
- even if the whole component re loads , only the changed element will be re rendered and rest of the object will remain same. Component will be reloaded but only the element with changed state elemnt will be re rendered. Thats called Reconcilation.

- <input type='text' value = {searchText} onChange={(e)=>{setSearchText(e.target.value)}/>
- In this input we bind the value of searchText with the value and initial value of searchText is empty so when we write something we need to update the value of search Text as if we are not updating it we will not see any updated result as the UI will not re render the updated value.To let know React that something got updated we have to use state variable and re render the element or object once the value got updated.
- Whenever there is state variable update, react triggers the reconciliation cycle(re-renders the component)

- Better way to implement filter is to have filterData as a seperate state variable

# React Hooks

# useEffect()

- useEffect(callback,dependencyaArray(optional)):if no dependency Array the useEffect is called after every Component Re Render and multiple API calls will be made whichever is written inside useEffect.
- if empty dependency Array, use Effect is called only once and at the initial render, even if the component re rendered useEffect(callback,[](optional empty array))
- if dependency array is having a state variable then whenever the state variable gets updated the useEffect hook will be called and if any API is written inside it, it will be re triggered.

# useState()

- create useState() inside the functional Component. As soul purpose is to create local state variable.
- do not create state variable inside a condition, or loop or function.
- useSatate() should be created at functional Componnet level.

# React Router (react-router-dom)

- Create Router Configuration in APP.js or at root level
- import { createBrowserRouter, RouterProvider } from 'react-router-dom';
- createBrowserRouter is used to create routes and its an array of object, we pass array of object in this createBrowserRoute and the object consist of path and element:Component to be displayed.
- in case of error , a custom error component can be created and used with the key as errorElement:ErrorComponent in the same object with path.
- const appRouter = createBrowserRouter([
  {path:'/',element:<AppLayout/>,errorElement:<ErrorComponent/>},
  {path:'/about',element:<About/>},
  {path:'/contactUs',element:<ContactUsComponent/>},
  ])
- RouterProvider is used as component and object received from CreateBrowserRoute is passed as argument to this RouterProvider as routes
- <RouterProvider router={appRouter}/>
- useRouteError is the hook given by Router
- children:[
  {path:'/',element:<Body/>},
  {path:'/about',element:<About/>},
  {path:'/contactUs',element:<ContactUsComponent/>}
  ],
- If we want child Routes and let the inner App Layout we can use child routes and
- const AppLayout = () =>{
  return (
  <div className="app">
  <Header/>
  {/\*_ if path is =/ This is just like router - outlet_/}
  <Outlet/>  
   </div>
  )
  }
- <outlet/> is the place where component will come and which component will come is based on the path and children of the component inside which we are displaying these components and the main component will ahve something called outlet and the children component will replace the outlet tag with the routes configured in the main component's child routes

- Never use anchor tag with React Routig as the whole page will get refreshed
- we have Link from React Router Dom to do that <li><Link to="/about">About Us</Link></li>
- This is SPA

# Two types of Routing

- Client side Routing
- Server Side Routing (make network call and it will send an html)

# Client Side Routing

- params are extracted from import { useParams } from 'react-router-dom' useParams
- child routes help in dynamic loading of components like outlet

# Class Based Components - Old way of Writing Code

- Class based component is a component where we write a class which extends React.component and import React from "react"
- we can also use object destructuring
  - import {Component} from "react"
  - class ClsComponnet extends Component
- This class will have a method called render and the render method will return the required JSX
- props passed to class component is same as functional componet <comp propname1={"content"} propname2={"content2"}/>
- receiving the prop object is different in class based component
- here we receive prop in a constructor and inside contructor we make that available to extended calss using super(props) inside constructor
- Now since we have supered the props, props are ready to be used inside the render function using this keyword.
- We can de structure the props obejct as well, inside the render function we can do const {propname1,propname2} = this.props
- State Variable is created in class based component inside the constructor as it is better to have that created when we create the instance of Class
- Inside the constrcutor we can write this.state = { count:0 }, this.state is the bigger object which has multiple thing as we create count inside state
- const [count] = useState(0) in functional Component and this.state = { count:0 } inside Constructor of Class based Component
- state object atkes care of all state variables
- Behind the scene React uses one big state even in case of functional component
- never update state variable directly
- this.setState({count:this.state.count+1 }) This is how we update state variable in Class based Components

# Life Cycle of Class based Component mounting

- React has 2 phases of loading or Mountig:

  - 1st phase is Rendering Phase where component loads : Pure and has no side effects. May be paused, aborted or restarted by React.
  - 2nd phase is comit phase when we have data and we have to fill the component with data :
    Can work with DOM, run side effects, schedule updates
  - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

- when class component is loaded or instantiated;scenario when class based component is inside a functional component

  - Constructor Loads or called first
  - Then render is called

- when class component is loaded or instantiated;scenario when class based component is inside a parent Class component

  - Parent Constructor Loads or called first
  - Then Parent render is called
  - Child Constructor Loads or called first
  - Then Child render is called

- Apart from render(), React provides another method called componentDidMount() in Class based Component

  - Constructor Loads or called first
  - Then render is called
  - Then Component Did Mount method

- Now if the Parent Class component and Child Class component are having all 3 methods, constructor,render() and componentDidMount() then:

  - Parent Constructor Loads or called first
  - Then Parent render is called
  - Child Constructor Loads or called first
  - Then Child render is called
  - Then Child componentDidMount is called
  - Finally the Parents componentDidMount is called

- Usage of Component Did Mount is to make API call

  - In func component we used to have useEffect(()=>{},[]) with dependency array to make API call, same behaviour, Render Component, make API call and then fill the component with Data

- When within single Parent we have 2 child class component then Constructor and Render will be called as wiin sync and when it apprears in code,
  and only after completeing all constructor and render , componentDidMount of first child will be called, followed by subseqent child and finally Parent Component did Mount will be called at last.

- Render phases of Mounting is completed first, and only when the Render phase gets completed, then Commit phase is called.
- Commit phase React updates the DOM and do DOM manipulation, As DOM manipilation is an expensive task, React does that in commit phase at the end only after finishing the Render Phase

- React Optimization works in a way
  - Mounting Phase
    - Render Phase
    - Commit Phase : Let DOM get updated with Dummy Data initially
  - Updating Phase
    - newProps, setState, forceUpdate() All these methods trgger the render method again
    - Since State is now changed or update, React will update the DOM
    - After Updating we have componentDidUpdate() as well

# All Cycle Diagram and Phase

- Mounting Phase

  - constructor(dummy)
  - Render(dummy)
  - HTML with Dummy
  - ComponentDidMount()
    - API Call
    - Update State is last phase after this React will go to Update phase and call render method again

- Update Phase

  - render(with API Data)
  - React updates DOM<html> and begins reconcilation process
  - ComponentDidUpdate is called next

- Unmounting Phase
  - If nothing has to be Updated then the last phase is Unmounting Phase
  - componnetWillUnmount()
  - This will be called when we either load different component or get to diff URl

# Comparision between Functional and Class via useEffect in Func Comp and Lifecycle in Class

- useEffect(()=>{some operation},[]) empty array means once
- useEffect(()=>{some operation},[count]) asssuming count being state variable, then with every change, use effect will be called
- In class based Component as we know there is componentDidUpdate lifecycle is there and in order to check and do the update we have to write if condition
- componentDidUpdate(prevProps,previousState){
  if(this.state.count != previousState.count||
  this.state.anotherStateVariable != previousState.anotherStateVariable){
  //then do something
  }
  } // Here in this if we write all possible cond to trigger API , hence multiple Condition
- The reason why useEffect(()=>{some operation},[]) it has dep array and not just a state, because there can be many state and many props that can trigger useEffect again

- There could be two useEffect doing different operations based on diff diff state variables same in class it is having multiple if else

- Assume we write SetInterval(()=>{},1000) After every 1 sec it will call the call back, even if we move out of the component and it being a single page APP, the setInterval method will be present in the main thread and will continue operation even when Url changes and new component is mounted. If we try mounting same component again then setInterval will have two instances

- In Functional Componnet the same Unmount is done using a return method which will be called for clean up

# Creation of Custom Hooks

- Hooks being Utility Params
- Single Responsibility implementation can eb done using Custom Hooks
- Fetching Data Logic & Hook's state management can be outsourced to Custom Hooks
- Just like Component, Custom Hooks can also have useEffect and useState both hooks

# Chunking/Dynamic Bundlying/Lazy Loading/Code Splitting

- Different names for the same process and techniques but does same thing
- This helps in breaking one large js to smaller pieces
- Bundle of components for 1 feature
- Based on feature we can break the app into multiple logical bundles and each bundle can have multiple components

# Same Chunking option we are defining in our Grocery feature

- Here Grocery will be Lazy Loading
- import {lazy} from "react"
- import {Suspense} from "react"
- const Grocery = lazy(()=> import('./components/Grocery'))
- {path:'/grocery',element:<Suspense fallback={<h3>Loading</h3>}><Grocery/></Suspense>
- This fall back is imp so when on demand bundle does not load, then this fall back is used, React asks for something to Render while the chunck is Loading
