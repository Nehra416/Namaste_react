import React, { useEffect, useState } from "react";

const RestaurantCard = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.12950&lng=77.28380&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await response.json();

        console.log("response is:", jsonData);
        // console.log("Response is :", jsonData.data.cards[3].card.card.gridElements.infoWithStyle.restaurants)
        // setCardData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };

    return (
        <div className="mainDiv">
            <h2 className="resName">Restaurant near by you - </h2>
            <div className="outerDiv">
                {
                    cardData.map((item, index) => {
                        const { areaName, avgRating, cloudinaryImageId, name, sla, cuisines } = item?.info;
                        return (
                            <div className="card" key={index}>
                                <div className="imgDiv">
                                    <img className="foodImage" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="Food image" />
                                </div>
                                <div className="lowerDiv">
                                    <h3 id="heading">{name}</h3>
                                    <p className="rating">{avgRating} <span className="time">. {sla.slaString}</span></p>
                                    <p className="location">{cuisines.join(", ")}</p>
                                    <p className="location">{areaName}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default RestaurantCard;
