import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {

  const navigate = useNavigate();

  const [products,setProducts] = useState([]);

  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState(null);

  const [editId,setEditId] = useState(null);

  const token = localStorage.getItem("adminToken");

  useEffect(()=>{

    if(!token){
      navigate("/login");
    }

    fetchProducts();

  },[]);

  const fetchProducts = async ()=>{

    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();

    setProducts(data);

  };

  // ADD PRODUCT
  const addProduct = async ()=>{

    const formData = new FormData();

    formData.append("name",name);
    formData.append("price",price);
    formData.append("description",description);
    formData.append("image",image);

    await fetch("http://localhost:5000/api/products",{

      method:"POST",
      body:formData

    });

    alert("Product Added");

    setName("");
    setPrice("");
    setDescription("");
    setImage(null);

    fetchProducts();

  };

  const deleteProduct = async(id)=>{

    await fetch(`http://localhost:5000/api/products/${id}`,{
      method:"DELETE"
    });

    alert("Product Deleted");

    fetchProducts();

  };

  const startEdit = (product)=>{

    setEditId(product._id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);

  };

  const updateProduct = async()=>{

    const formData = new FormData();

    formData.append("name",name);
    formData.append("price",price);
    formData.append("description",description);

    if(image){
      formData.append("image",image);
    }

    await fetch(`http://localhost:5000/api/products/${editId}`,{

      method:"PUT",
      body:formData

    });

    alert("Product Updated");

    setEditId(null);
    setName("");
    setPrice("");
    setDescription("");
    setImage(null);

    fetchProducts();

  };

  const logout = ()=>{
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  return(

    <div style={{padding:"40px"}}>

      <h2>Admin Panel</h2>

      <button onClick={logout}>Logout</button>

      <h3>Add Product</h3>

      <input
      placeholder="Product Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
      placeholder="Price"
      value={price}
      onChange={(e)=>setPrice(e.target.value)}
      />

      <br/><br/>

      <textarea
      placeholder="Product Description"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />

      <br/><br/>

      <input
      type="file"
      onChange={(e)=>setImage(e.target.files[0])}
      />

      <br/><br/>

      {editId ? (

        <button onClick={updateProduct}>
          Update Product
        </button>

      ) : (

        <button onClick={addProduct}>
          Add Product
        </button>

      )}

      <hr/>

      <h3>All Products</h3>

      {products.map((product)=>(

        <div
        key={product._id}
        style={{
        border:"1px solid #ccc",
        padding:"15px",
        marginBottom:"15px",
        display:"flex",
        alignItems:"center",
        gap:"20px"
        }}
        >

          <img
          src={`http://localhost:5000/uploads/${product.image}`}
          width="120"
          />

          <div>

            <h4>{product.name}</h4>

            <p>₹{product.price}</p>

            <p>{product.description}</p>

            <button onClick={()=>startEdit(product)}>
              Edit
            </button>

            <button
            onClick={()=>deleteProduct(product._id)}
            style={{marginLeft:"10px"}}
            >
            Delete
            </button>

          </div>

        </div>

      ))}

    </div>

  );

}

export default Admin;