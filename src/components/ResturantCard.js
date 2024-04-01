import { CDN_URL } from "../utils/constants"

const ResturantCard = (props) => {
    console.log(props)
    const {resData}=props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}= resData?.info
    return(
        <div className="resturantCard">
            <img className="resimg"src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{resData.info.sla.deliveryTime} min</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default ResturantCard ;