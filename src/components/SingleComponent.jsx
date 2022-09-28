import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
export const SingleComponent = () => {
    const [eachProduct,setEachProduct] = useState([]);
    const [cartData, setCartData] = useState([])
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const {id} = useParams()

    const getProduct = () =>{
        axios.get(`https://masai-lvetslp-server.herokuapp.com/products/${id}`)
       .then((res) => setEachProduct(res.data))
   }

    useEffect(() =>{
        
     

        const getCart = () =>{
            axios.get(`https://masai-lvetslp-server.herokuapp.com/cart`)
            .then((res) => setCartData(res.data))
        }
        getProduct()
        getCart()
    
    },[])

    let show = true

    if(cartData){

        cartData.map((item) => {
            if(item.product_id == eachProduct.id){
                show = false
            }
        })
        
    }



    const handleAddtoCart =() =>{
        let cart = {
            product_id : eachProduct.id,
            quantity : quantity
        }
        axios.post("https://masai-lvetslp-server.herokuapp.com/cart", cart)
        .then(show = true)
      
    }

    
    
  return (
    <div>
        <div>
            <img src= {eachProduct.image} alt="" />
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
                show ? <button onClick={handleAddtoCart}  >Add to Cart</button> : <button> <Link to = {`/cart`}>Go to Cart</Link></button>
            }
        </div>
    </div>
  )
}
