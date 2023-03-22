import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

import Shimmer from "./Shimmer";



const RestaurantMenu = () => {

    const { resId } = useParams();
  
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
      getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
      const data = await fetch(FETCH_MENU_URL + resId);
      
      const json = await data.json();
      
     
      setRestaurant(json.data);
    };
    
    return !restaurant ? (
        <Shimmer />
        ) : (
        <div className="flex">
        <div>
            <h1>Restraunt id: {resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div className="p-5">
                <h1>Menu</h1>
                <ul>
                    { Object.values(restaurant?.menu?.items).map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
        </div>
        </div>
  );
};

export default RestaurantMenu;
