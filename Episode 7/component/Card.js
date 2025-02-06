import React, { useEffect, useState } from "react";

const Card = () => {
    const [cardData, setCardData] = useState([]);
    const [resData, setResData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.12950&lng=77.28380&restaurantId=26761&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await response.json();

        console.log("response is:", jsonData);
        console.log("response :",jsonData.data.cards[0]?.card?.card)
        // console.log("Response :", jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // console.log("Response is :", jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setCardData(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setResData(jsonData.data.cards);

    };

    return <div>
        <div>
            <h1 style={{ textAlign: "center", fontFamily: "cursive", marginTop: "15px" }}>{resData[0]?.card?.card?.text}</h1>
            <p style={{ textAlign: "center", fontFamily: "cursive", marginTop: "15px" }}>{resData[2]?.card?.card?.info?.avgRating} - ({resData[2]?.card?.card?.info?.totalRatingsString}) - {resData[2]?.card?.card?.info?.costForTwoMessage}</p>
        </div>
        {
            cardData.map((item) => {
                const { name, price, description, imageId, id } = item?.card?.info;
                const { rating, ratingCountV2 } = item?.card?.info?.ratings?.aggregatedRating;
                // console.log(rating)
                return (
                    <div className="recommendedCards" key={id} >
                        <div className="recText" style={{ fontFamily: "sans-serif" }}>
                            <h2 style={{ fontFamily: "cursive" }}>{name}</h2>
                            <span style={{ fontWeight: "600" }}>Rs. {price/100}</span>
                            {
                                rating &&
                                <p className="rating">{rating} <span className="time">. ({ratingCountV2})</span></p>
                            }
                            <p className="location">{description}</p>
                        </div>
                        <div className="recImgDiv">
                            <img className="recImg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} alt="Food image" />
                        </div>
                    </div>
                )
            })
        }
    </div>
};

export default Card;
