
const ResCard = ({r})=>{
    const {res} = r

    // const {name} = resList.data

    return (<div id="rescard">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + res.data.cloudinaryImageId}>
        </img>
        <div>
            <h1>{res.data.name}</h1>
            {/* <h1></h1>
            <h1></h1>
            <h1></h1> */}
        </div>
    </div>)}

export default ResCard