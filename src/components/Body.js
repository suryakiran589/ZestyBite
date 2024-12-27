import ResCard from "../components/ResCard"
import resList from "../utils/resList"

const Body= ()=>

    (<div className="ResContainer">
           {resList.map((res,index) =>
                <ResCard  id={index} r={{res}} />
            )}
            
    </div>)
        
    

export default Body