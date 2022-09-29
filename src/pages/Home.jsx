import React, { useState,useEffect } from 'react'
import{useDispatch, useSelector} from "react-redux"
// import {useNavigate}from "react-router-dom"
import {Link} from "react-router-dom"
import axios from "axios"
import { FiLogIn } from 'react-icons/fi'

import "../styles/Home.css"
import "../styles/cart.css"
import { addToCart, style } from '../redux/Action'

window.h = React.createElement;

export const Home = () => {
    const Auth   = useSelector((store) => store.isAuth)
    const dispatch = useDispatch()
    const [movieData, setMovieData] = useState([]);
  
    
        React.useEffect(() => {
            const getData = () =>{

                axios.get("https://masai-lvetslp-server.herokuapp.com/products")
                .then(res =>setMovieData(res.data))
         
            }
            const getCart = async() =>{
                if(Auth){
                    let response = await axios.get("https://masai-lvetslp-server.herokuapp.com/cart")
                    dispatch(addToCart(response.data))
                }
            }
            getData()
            getCart()
        
        }, []);
   

    if(Auth === false){
        return <div className="login__wrapper">
        <h1>Please Login</h1>
        <Link to={`/login`} onClick = {() => dispatch(style({div1:"inactive", div2:"inactive", div3:"active"}))} className="login">
              <p>Login</p>
              <div><FiLogIn /></div>
        </Link>
        </div>
    }
    
  

  return (
    <div className='Home'>
        <h1 className='Home__heading'> Our New Arrivals</h1>
    <div className='Home__container'>
        {
        movieData.length == 0 ? <div>loading....</div> :
         movieData.map((movie) =>{
           return <div key={movie.id} className = "Home__card">
                <img src = {movie.image} alt="" className='Home__img'/>
                <div className='Home__title'>{movie.title}</div>
                    <Link to={`product/${movie.id}`} className = "link" > 
                <button className='Home__button'>
                    More details
                    </button>
                    </Link>
            </div>

        })
        }

    </div>
    </div>
  )
}
