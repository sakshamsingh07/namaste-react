import { useState } from "react";
import ResturantCard from "./ResturantCard";
import resList  from "../utils/mockData";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    //local state variable  useState()
    const [restaurantsList , setrestaurantsList] = useState([]);
    //const [restaurantsList, setrestaurantsList] = useState(resList);

    // const arr = useState(resList);
    // const restaurantsList = arr[0];
    // const setrestaurantsList = arr[1];

    // const arr = useState(resList);
    // const [restaurantsList , setrestaurantsList] = arr;

    const [filterrestaurantsList, setfilterrestaurantsList] = useState([]);


    const [search, setsearch] = useState("");



    //useEffect()
    useEffect(() => {
      console.log("use-effect rendered!!!!");
      swiggyApi();
      
    },[])

    const swiggyApi = async () => {
      //const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);

      setrestaurantsList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilterrestaurantsList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


    }

    //conditional Rendering

    // if(restaurantsList.length === 0){
    //   return <Shimmer/>
    // }


    //normal variable
    let restaurantsList1 = [
        {
        "info": {
          "id": "38925",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "mdl4tnyc8wbvysqxzhnq",
          "locality": "Netaji Subhash Marg",
          "areaName": "Daryaganj",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "2456",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 25,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "iconType": "ICON_TYPE_EMPTY"
          },
        },
      } , 
      {
        "info": {
          "id": "38926",
          "name": "KFC",
          "cloudinaryImageId": "mdl4tnyc8wbvysqxzhnq",
          "locality": "Netaji Subhash Marg",
          "areaName": "Daryaganj",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 3.3,
          "parentId": "2456",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 25,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "iconType": "ICON_TYPE_EMPTY"
          },
        },
      },
      {
        "info": {
          "id": "38927",
          "name": "mom's magic",
          "cloudinaryImageId": "mdl4tnyc8wbvysqxzhnq",
          "locality": "Netaji Subhash Marg",
          "areaName": "Daryaganj",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.5,
          "parentId": "2456",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 25,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "iconType": "ICON_TYPE_EMPTY"
          },
        },
      }]

    return restaurantsList.length === 0 ? (<Shimmer/>) : (
        <div className="body-Containe">
            <div className="filter">
              <div className="search">
                <input type ="text" className="search-bar" value = {search} 
                onChange={(e)=>{
                  setsearch(e.target.value); 
                  console.log(search)}}></input>
              </div>
              <div className = "search-btn">
                <button onClick={()=>{
                  //filter the resturant card and update the UI
                  //Searchtext
                  const filterrestaurant = restaurantsList.filter((res)=>res.info.name.toLowerCase().includes(search.toLowerCase()));
                  setfilterrestaurantsList(filterrestaurant)}}>Search</button>
              </div>
                <div className="fiter-btn">
                    <button  
                    onClick={()=>{                        
                        const restaurantsList2 = restaurantsList.filter((res)=>res.info.avgRating > 4.5) ;
                        setrestaurantsList(restaurantsList2)
                        console.log(restaurantsList2)
                    }}
                    >
                        Top Resturant</button>   
                </div>
            </div>
            <div className="resturantscontainercards">
            {/* <ResturantCard  resturant="Tealogy" cuisines="Tea , Indian" rating="4.4" delivery="25" />
            <ResturantCard resturant="KFC" cuisines="Burger , Fast food" rating="4.4" delivery="20"/> */}

            {/* <ResturantCard  resData={resobj[0]}/>
            <ResturantCard  resData={resobj[1]}/>
            <ResturantCard  resData={resobj[2]}/>
            <ResturantCard  resData={resobj[3]}/>
            <ResturantCard  resData={resobj[4]}/>
            <ResturantCard  resData={resobj[5]}/>
            <ResturantCard  resData={resobj[6]}/>
            <ResturantCard  resData={resobj[7]}/>
            <ResturantCard  resData={resobj[8]}/> */}

            {/* {resList.map((resturant)=><ResturantCard key = {resturant.info.id} resData = {resturant}/>)} */}

            {filterrestaurantsList.map((resturant)=><ResturantCard key = {resturant.info.id} resData = {resturant}/>)}
            
            

            </div>
            
        </div>
    )
}

export default Body ;