import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"

function ResMenu(){
    const [resInfo,setResInfo]=useState(null)
    const {id}=useParams()
    // console.log(id)
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
        const {name,city,avgRating}=data?.cards[2]?.card?.card?.info

    }

    if (resInfo == null){
        return <h1>shimmer</h1>
    }
    return (
        <h1>{name}</h1>
    )
}
export default ResMenu