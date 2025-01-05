
const ResCard = ({r})=>{
    // console.log(r)
    const {res} = r

    // const {name} = resList.data

    return (<div id="rescard">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + res.info.cloudinaryImageId}>
        </img>
        <div>
            
            <h1>{res.info.name}</h1>
            <h1>{res.info.areaName}</h1>
            <h1>Rating :{res.info.avgRating}</h1>
            <h1></h1>
        </div>
    </div>)}

export default ResCard