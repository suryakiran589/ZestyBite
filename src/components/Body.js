import ResCard from "../components/ResCard"
import { useState,useEffect } from "react"
import reList from "../utils/resList"
const Body= ()=>{
    const [resList,setReslist] = useState(reList)
    console.log(resList)
    // async function fetchData(){
        
    //     const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=16.9890648&lng=82.2474648&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1")
        
    //     const json = await data.json() 

    //     setReslist(json?.data?.cards)

    // }
    // useEffect(() =>
    // {
    //     fetchData()
    // } 
    // ,[])
    return (<div className="ResContainer">
           {resList.map((res,index) =>
                <ResCard  key ={index} r={{res}} />
            )}
            
    </div>)
    }
        
    

export default Body