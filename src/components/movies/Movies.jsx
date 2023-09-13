import  Axios  from "axios"
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {toggleFavorite} from '../../Redux/favorite'
export default function Movies (){

  let isFavorite = false;
  const dispatch = useDispatch();
  let favorites = useSelector((state) => state.favorite.favorites);

let [movie,setmovie]=useState([])

 async function getmovies(){

 let response= await Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=09f6e5ab5804756966b952b5230a7aa1`,{
  params:{
  limit:8,
  }
 })
  setmovie(response.data.results)
  console.log(response.data.results);
 }

useEffect(()=>{
  getmovies()
},[])



const toggelFavorite = (mov)=>{
    isFavorite =true ;
  dispatch(toggleFavorite(mov))

}


  return<>



 <div className="row">
{movie.map((mov,index)=><div key={index}className="col-md-3  g-3 shadow">

<div>
  {/* handle get movie details */}
<Link to={ `/itemdetails/${mov.id}`}>
<img className="w-100" src={`http://image.tmdb.org/t/p/w500`+mov.poster_path} alt="" style={{height:400}} />
</Link>
{!isFavorite?
<i className="fa-regular fa-star fa-xl" style={{color: 'red',backgroundColor:'white'}} onClick={()=>{toggelFavorite(mov)}}></i>:
<i className="fa-solid fa-star fa-xl" style={{color: '#e7131d'}} onClick={()=>{toggelFavorite(mov)}}></i>
}

<h5 style={{textAlign:"center",color:"blue"}} className='border p-2 m-2'>{mov.title}</h5>

</div>

</div>)}


 </div>
  
  </>
  }
