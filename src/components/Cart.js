import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { clearCart } from "../utils/cartSlice"

function Cart() {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch =useDispatch()  
    const [desc,setDesc] =useState(false)
      const [itemId,setItemId] =useState("")
      function handleDesc(itemName){
        setItemId(itemName)
        setDesc(!desc)
    
      }
      function handleClearCart(){
      dispatch(clearCart())
      
      }
    // console.log("cart:",cartItems)
    return (<div className="  flex flex-col justify-center items-center ">
        <div className="md:text-3xl font-bold  ">Cart</div>
        <div className="justify-center items-center">
            {cartItems.length!=0 ? cartItems.map((item) => <div key={item?.card?.info?.name} onClick={()=>handleDesc(item?.card?.info?.name)} className="flex justify-between md:w-[900px]  p-[10px] m-[5px] rounded-[10px] border-b-2 cursor-pointer">
            <div className="m-[5px]">

              <h1 className="text-[20px] font-bold font-Poppins ">{item?.card?.info?.name}</h1>
              <h1 className="font-bold">₹{item?.card?.info?.defaultPrice/100 ||item?.card?.info?.price/100}</h1>
              {item?.card?.info?.ratings?.aggregatedRating?.rating ?<h1>{item?.card?.info?.ratings?.aggregatedRating?.rating} Rating </h1> :null}
              {desc && itemId==item?.card?.info?.name?<div className="w-[400px]"><p className="">{item?.card?.info?.description}</p></div>:<h1>&#x2193;</h1>}
              
            </div>
              <div className="relative ">
            <img className=" rounded-[10px] w-[200px] size-auto" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`} ></img>
              </div>
            </div>) : <p className="text-3xl text-gray-300">Your cart is empty</p>}
        </div>
        {cartItems.length !=0 && <button className="bg-red-500 p-2 text-white rounded-md" onClick={handleClearCart}>Clear Cart</button>}
        </div>)
}
export default Cart