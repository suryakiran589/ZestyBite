import resList from "../utils/resList"
const ResCard = ({r})=>{
    const {res} = r
    // const {name} = resList.data
    console.log(res)
    return (<div id="rescard">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bz9zkh2aqywjhpankb07" + res.data.cloudinaryImageId}>
        </img>
        <div>
            <h1>{res.data.name}</h1>
            {/* <h1></h1>
            <h1></h1>
            <h1></h1> */}
        </div>
    </div>)}

export default ResCard