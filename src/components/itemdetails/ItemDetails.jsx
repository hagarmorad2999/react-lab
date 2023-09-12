import axios from 'axios'
import React, { useEffect, useState } from 'react'
// بتكون شايله ليا اي حاجه ببعتها في ال url
import { useParams } from 'react-router-dom'

export default function ItemDetails() {
    let {id}=useParams()
const[itemdetails,setitemdetails]=useState({})
async function getitemdetails(id) {
    let {data} =await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=09f6e5ab5804756966b952b5230a7aa1`);
    setitemdetails(data)  
}
useEffect(()=>{

    getitemdetails(id) 
},[])


  return <>
  
<div class="row ">
<div className="col-md-4"></div>

<div className="col-md-4 border shadow">
<img className="w-100" src={`http://image.tmdb.org/t/p/w500`+itemdetails.poster_path} alt=""  style={{height:400}}/>
  <h5 style={{textAlign:"center",color:"blue"}} className='border p-2 m-2'>{itemdetails.title}</h5>
  <p className='text-muted'>{itemdetails.overview}</p>
</div>



<div className="col-md-4"></div>
</div>
  
  
  </>
}
