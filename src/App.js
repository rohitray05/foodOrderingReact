import React,{lazy,Suspense} from 'react';
import ReactDom from 'react-dom/client'
import Header from './components/HeaderComponent';
import Body from './components/BodyComponent';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import ContactUsComponent from './components/ContactUs'
import ErrorComponent from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      {/** if path is =/ This is just like router - outlet*/}
      <Outlet/>  
    </div>
  )
}

const Grocery = lazy(()=> import('./components/Grocery'))

const appRouter = createBrowserRouter([
  {path:'/',
    element:<AppLayout/>,
    children:[
      {path:'/',element:<Body/>},
      {path:'/about',element:<About/>},
      {path:'/contactUs',element:<ContactUsComponent/>},
      {path:'/restaurant/:resId',element:<RestaurantMenu/>},
      {path:'/grocery',element:<Suspense fallback={<h3>Loading</h3>}><Grocery/></Suspense>}
    ],
    errorElement:<ErrorComponent/>
  },
])

const root = ReactDom.createRoot(document.getElementById('root'))
//root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter}/>)