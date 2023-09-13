import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {toggleFavorite} from '../../Redux/favorite'

export default function Favourite (){
  let isFavorite = false;
  const dispatch = useDispatch();
  let movie = useSelector((state) => state.favorite.favorites);


  const toggelFavorite = (mov)=>{
    dispatch(toggleFavorite(mov))
  
  }
  return<>


<div className="row">
{movie.map((mov,index)=><div key={index}className="col-md-3  g-3 shadow">

<div>

<Link to={ `/itemdetails/${mov.id}`}>
<img className="w-100" src={`http://image.tmdb.org/t/p/w500`+mov.poster_path} alt="" style={{height:400}} />
</Link>
{isFavorite?
<i className="fa-regular fa-star fa-xl" style={{color: 'red'}} onClick={()=>{toggelFavorite(mov)}}></i>:
<i className="fa-solid fa-star fa-xl" style={{color: '#e7131d'}} onClick={()=>{toggelFavorite(mov)}}></i>
}

<h5 style={{textAlign:"center",color:"blue"}} className='border p-2 m-2'>{mov.title}</h5>

</div>

</div>)}


 </div>














  </>
  }
