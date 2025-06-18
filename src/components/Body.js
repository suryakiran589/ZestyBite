import ResCard from "../components/ResCard";
import { useState, useEffect } from "react";
import {useParams,Link} from "react-router-dom"
import Shimmer from "./Shimmer";
const Body = () => {
  const [resList, setReslist] = useState([]);
  const [svalue, setValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const results = await data.json();
      console.log(
        results
      );
      
      console.log("  In async  ")
      setReslist(
        results?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredList(
        results?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log(error, "res error");
    }
  }
  if( resList == undefined || resList.length==0    ){
    return <Shimmer/>
  }

  return (
    <div className="">
      <div className="p-4 ">
        <input className="focus:bg-amber-200 border-0 md:w-[250px] m-3 bg-amber-100 p-1 rounded-[5px] outline-none"
          type="text"
          value={svalue}
          placeholder="Search Restaurants"
          onChange={(e) => {
            console.log(e.target);
            setValue(e.target.value);
          }}
        ></input>
        <button className="bg-[#ff7c55] hover:bg-[#df6a47] px-2 py-[3px] m-[5px] md:text-[17px] text-white rounded-[5px]"
          onClick={() => {
            let filter = resList.filter((res) =>
              res.info.name.toLowerCase().includes(svalue.toLowerCase())
            );
            setFilteredList(filter);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">

        {filteredList.map((res) => (
          <Link to={"/restaurants/"+res?.info?.id} key={res.info.id}><ResCard key={res.info.id} r={{ res }} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
