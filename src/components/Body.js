import ResCard from "../components/ResCard";
import { useState, useEffect } from "react";
import reList from "../utils/resList";
const Body = () => {
  const [resList, setReslist] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  
  async function fetchData() {
    try{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const results = await data.json();
    console.log(results.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setReslist(results?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
catch(error){
    console.log(error,"res error")
}

  }
  return (
    <div className="ResContainer">
        
      {resList.map((res, index) => (
        <ResCard key={index} r={{ res }} />
      ))}
    </div>
  );
};

export default Body;
