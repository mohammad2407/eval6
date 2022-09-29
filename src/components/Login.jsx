import React, { useState } from 'react'
import { LOGIN, login, style } from '../redux/Action'
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import "../styles/Navbar.css"

export const Login = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isAuth} = useSelector((state) => state)

    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async(event) =>{
        event.preventDefault();
        let users = {
            email,
            password
        }
        if (users.email !== "" && users.password !== "") {
           await fetch("https://reqres.in/api/login", {
                method: "POST",
                body: JSON.stringify(users),
                headers: {
                    'Content-Type': "application/json"
                }
            }).then((res) => res.json())
                .then((data) => {
                    dispatch({
                        type:LOGIN,
                        payload:data.token
                    })

                    Navigate("/")
                })
                .then(() =>  dispatch(style({div1:"active", div2:"inactive", div3:"inactive"})))


            
        }
        else{
            alert('Invalid User Details')
        }
    }   

    if(isAuth){
        return <div> You are already Logged In <strong>Refresh</strong> to logout</div>
    }

  return (
    <div>
        <h1>Login</h1>

        <form action="" onSubmit={handleSubmit}>
            <label htmlFor=""> Email : </label>
            <input type="text" placeholder = "email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
            <br />
            <label htmlFor="">Password :</label>
            <input type="password" placeholder = "Password" value={password} onChange = {(e) => setPassword(e.target.value)} />
            <br />
            <input type="submit" value="Login" className='login__button' />
        </form>
    </div>
  )
}
