import React, { useState,useEffect } from 'react'
import{useSelector} from "react-redux"
// import {useNavigate}from "react-router-dom"
import {Link} from "react-router-dom"
import axios from "axios"

import "../styles/Home.css"

window.h = React.createElement;

export const Home = () => {
    const Auth   = useSelector((store) => store.isAuth)

    const [movieData, setMovieData] = useState([]);
  
    
        React.useEffect(() => {
            const getData = () =>{

                axios.get("https://masai-lvetslp-server.herokuapp.com/products")
                .then(res =>setMovieData(res.data))
         
            }
            getData()
        
        }, []);
   



   

    console.log(movieData)
    // if(Auth === false){
    //     return <div>
    //         <h1>Please Login</h1>
    //         <Link to = "/list">Login</Link>
    //         </div>
    // }
    
  

  return (
    <div className='Home'>
        <h1 className='Home__heading'> Our New Arrivals</h1>
    <div className='Home__container'>
        {
            !movieData ? <div>loading....</div> :
         movieData.map((movie) =>{
           return <div key={movie.id} className = "Home__card">
                <img src = {movie.image} alt="" className='Home__img'/>
                <div className='Home__title'>{movie.title}</div>
                <button className='Home__button'>
                    <Link to={`product/${movie.id}`} className = "link" > 
                    More details
                    </Link>
                    </button>
            </div>

        })
        }

    </div>
    </div>
  )
}