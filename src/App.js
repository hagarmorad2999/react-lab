
import './App.css';
import Layout from './components/Layout/Layout';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Notfined from './components/notdefined/Notdefined';
import Movies from './components/movies/Movies';
import Favourite from './components/favourite/Favourite';
import Login from './components/login/Login';
import { Signup } from './components/signup/Signup';
import ItemDetails from './components/itemdetails/ItemDetails';
import { Provider } from 'react-redux';
import store from './Redux/store';
import TrendingMovies from './components/Trending/TrendingMovies';
import LanguageContextProvide from './context/LanguageContext';



let routers =createBrowserRouter([

  {path:"/",element:<Layout/> , children:[

{index:true,element:<Movies/>},
{path:"favourite",element:<Favourite/>},
{path:"login",element:<Login/>},
{path:"signup",element:<Signup/>},
{path:"trending",element:<TrendingMovies/>},
{path:"itemdetails/:id",element:<ItemDetails/>},
{path:"*",element:<Notfined/>},

  ] }


])




function App() {
  return <>

  {/* redux */}
  <Provider store={store}>
  <RouterProvider router={routers}/>
  </Provider>


  {/* context */}
{/* <LanguageContextProvide> */}
{/* <RouterProvider router={routers}/> */}
{/* </LanguageContextProvide> */}


  </>

}

export default App;
