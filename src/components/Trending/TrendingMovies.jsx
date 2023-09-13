import React, { useEffect } from 'react'
import { getTrending } from '../../Redux/MovieSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function TrendingMovies() {
   let {trendingMovies} =useSelector((state)=>state.movie)
    let dispatch=useDispatch();
useEffect(()=>{
dispatch(getTrending())
},[])



  return <>
  


  <div className="row">
{trendingMovies?.map((mov,index)=><div key={index}className="col-md-3  g-3 shadow">

<div>
  {/* handle get movie details */}
<Link to={ `/itemdetails/${mov.id}`}>
<img className="w-100" src={`http://image.tmdb.org/t/p/w500`+mov.poster_path} alt="" style={{height:400}} />
</Link>
<h5 style={{textAlign:"center",color:"blue"}} className='border p-2 m-2'>{mov.title}</h5>
</div>

</div>)}


 </div>
  </>
}

