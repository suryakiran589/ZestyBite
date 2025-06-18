
const ResCard = ({r})=>{
    // console.log(r)
    const {res} = r
    // console.log(res.info.id)
    

    // const {name} = resList.data

    return (<div className="w-[150px] min-h-[270px] p-2 m-1 rounded-[15px] md:w-[250px] md:p-3 md:m-2  text-sm md:text-lg flex flex-col items-center border-2  hover:bg-orange-300 transition-all   md:min-h-[350px]     " id="rescard ">
        <img className="rounded-[20px] h-[100px] w-[200px]  md:h-40 md:w-[90%]   " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + res.info.cloudinaryImageId}>
        </img>
        <div className=" w-full rounded-[5px] text-sm p-3  md:text-lg ">
            
            <h1 className="font-poppins">{res.info.name}</h1>
            <h1 className="font-roboto">{res.info.areaName}</h1>
            <h1 className="font-roboto pt-3"><span className="bg-green-500 text-white p-1 rounded-md text-[13px]">{res.info.avgRating}</span> Rating  </h1>
            <h1></h1>
        </div>
    </div>)}

export default ResCard