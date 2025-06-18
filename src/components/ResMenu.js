import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getResData from "../utils/getResData";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Shimmer from "../components/Shimmer"

function ResMenu() {
  const { id } = useParams();
  // console.log(id,"at id")
  const [desc,setDesc] =useState(false)
  const [itemId,setItemId] =useState("")
  function handleDesc(itemName){
    setItemId(itemName)
    setDesc(!desc)

  }
  // console.log(id)
  const resInfo = getResData(id);
  const dispatch = useDispatch()
  function handleAddItem(item) {
    console.log("add item",item)
    dispatch(addItem(item))
  }

  if (resInfo == null) {
    return <Shimmer/>;
  }
  console.log("res",resInfo);
  const { name, city, avgRating, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;
  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
  console.log("items",itemCards)
  return (
    <div className="p-7px md:p-[15px]  flex items-center justify-center">
      {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img> */}
      <div>
      <div className="pl-4">

      <h1 className="font-poppins text-lg md:text-4xl">{name}</h1>
      <h1>{city}</h1>
      <h1 ><span className="bg-green-600 rounded-[7px] md:text-lg px-[3px] text-white md:px-[6px]">{avgRating}</span></h1>
      </div>
      <div>

      {
        itemCards?.map((item)=>
          <div onClick={()=>handleDesc(item?.card?.info?.name)} key={item?.card?.info?.name} className="flex justify-between md:w-[900px]  p-[10px] m-[5px] rounded-[10px] border-b-2 cursor-pointer hover:bg-orange-100 transition-all">
            <div className="w-11/12 md:m-[5px]">

              <h1 className="text-[20px] font-bold font-Poppins ">{item?.card?.info?.name}</h1>
              <h1 className="font-bold">₹{item?.card?.info?.defaultPrice/100 ||item?.card?.info?.price/100}</h1>
              {item?.card?.info?.ratings?.aggregatedRating?.rating ?<h1>{item?.card?.info?.ratings?.aggregatedRating?.rating} Rating </h1> :null}
              {desc && itemId==item?.card?.info?.name?<div className="md:w-[400px] font-roboto"><p className="">{item?.card?.info?.description}</p></div>:<h1>&#x2193;</h1>}
              
            </div>
              <div className="relative ">
              <button className="absolute  rounded-[7px] text-[20px] bg-green-600 px-[12px] text-white  top-0 hover:bg-green-700" onClick={(e) => {
                e.stopPropagation();
                handleAddItem(item)}}>Add</button>
            <img className=" rounded-[10px] w-[200px] size-auto" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`} ></img>
              </div>
            </div>
        )
      }
      </div>
      </div>
    </div>
  );
}
export default ResMenu;
