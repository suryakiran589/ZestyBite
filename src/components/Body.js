import ResCard from "../components/ResCard";
import { useState, useEffect } from "react";
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
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const results = await data.json();
      console.log(
        results?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log("  In async  ")
      setReslist(
        results?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredList(
        results?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error, "res error");
    }
  }
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={svalue}
          onChange={(e) => {
            console.log(e.target);
            setValue(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let filter = resList.filter((res) =>
              res.info.name.toLowerCase().includes(svalue.toLowerCase())
            );
            setFilteredList(filter);
          }}
        >
          search
        </button>
      </div>
      <div className="ResContainer">
        {filteredList.map((res, index) => (
          <ResCard key={index} r={{ res }} />
        ))}
      </div>
    </div>
  );
};

export default Body;
