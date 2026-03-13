import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function ProductDetails() {

const { id } = useParams();
const [product,setProduct] = useState(null);
const {addToCart} = useContext(CartContext)

useEffect(()=>{

axios.get(`http://localhost:5000/api/products/${id}`)
.then(res=>{
setProduct(res.data)
})

},[id])

if(!product){
return <h2>Loading...</h2>
}

return(

<div className="container">

<h1>{product.name}</h1>

<img src={product.images?.[0]} width="200"/>

<p>{product.description}</p>

<h3>₹{product.price}</h3>

<button onClick={()=>addToCart(product)}>
Add To Cart
</button>

</div>

)

}

export default ProductDetails