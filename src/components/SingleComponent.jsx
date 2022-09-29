import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { showBtn, style } from '../redux/Action'
export const SingleComponent = () => {
    const [eachProduct,setEachProduct] = useState([]);
    const [cartData, setCartData] = useState([])
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const {id} = useParams()

    const {showButton, isAuth} = useSelector((state) => state)
    
    console.log(showButton, isAuth)
    const getProduct = () =>{
        axios.get(`https://masai-lvetslp-server.herokuapp.com/products/${id}`)
       .then((res) => setEachProduct(res.data))
    //    .then( dispatch(showBtn(false)))
   }

    useEffect(() =>{
        const getCart = () =>{
            axios.get(`https://masai-lvetslp-server.herokuapp.com/cart`)
            .then((res) => setCartData(res.data))
        }
        getProduct()
        getCart()
    
    },[])

   


       if(cartData){
        cartData.map((item) =>{
            if(item.produc_id == eachProduct.id){
                dispatch(showBtn(true))
            }
        })
       }
        



    const handleAddtoCart = async() =>{
        let cart = {
            product_id : eachProduct.id,
            quantity : quantity
        }
        
               axios.post("https://masai-lvetslp-server.herokuapp.com/cart", cart)
              .then(() => dispatch(showBtn(true)))
        
    }

    
    

    
  return (
    <div>
        <div>
            <img src= {eachProduct.image} alt={eachProduct.title} />
        </div>

        <div className='each__flex2'>
            <div className='each__title'>
                {eachProduct.title}
            </div>

            <div>
                <span>Brand Name :</span>
                <span>{eachProduct.brand}</span>
            </div>

            <div>
                <span>Category :</span>
                <span>{eachProduct.category} </span>
            </div>

            <div>price: {eachProduct.price  }</div>

           
            
            <div>
                <button disabled = {quantity > 9} onClick = {() => setQuantity(quantity+1)}> + Add</button>
                {quantity}

                <button disabled = {quantity <= 0} onClick = {() => setQuantity(quantity-1)} > - less</button>
            </div>

            {
               !showButton ? <button onClick={handleAddtoCart}  >  Add to cart</button>  : <button><Link onClick={() => dispatch(style({div1:"inactive", div2:"active", div3:"inactive"}))} to={`/cart`}> Go To Cart</Link></button>
                
            }
            
        </div>
    </div>
  )
}
