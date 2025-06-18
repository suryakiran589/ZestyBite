import {useState,useEffect} from "react"

const getResData=(id)=>{
    const [resInfo,setResInfo]=useState(null)
    useEffect(
            ()=>{getData()},[id]
        )
        async function getData()
        {
            const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9046136&lng=77.614948&restaurantId="+ id)
            const results = await res.json();
            // console.log(results)
            const {data} =results
            // console.log(data)       
            setResInfo(data) 
            
            console.log("menu",data)
            // const {name,city,avgRating}=data?.cards[2]?.card?.card?.info
    
        }
        return resInfo
}

export default getResData