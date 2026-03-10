function ProductCard({product}){

return(

<div className="shadow-lg p-4">

<img src={product.images[0]} />

<h3>{product.name}</h3>

<p>${product.price}</p>

<button>Add to Cart</button>

</div>

)

}