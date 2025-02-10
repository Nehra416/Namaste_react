import React, { useEffect, useState } from "react";
import SingleCard, { UpdateSingleCard } from "./SingleCard";

const MenuCard = () => {
    const [cardData, setCardData] = useState([]);
    const [resData, setResData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.12950&lng=77.28380&restaurantId=26761&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await response.json();

        // console.log("response is:", jsonData);
        console.log("response :", jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)

        setCardData(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setResData(jsonData.data.cards);
        console.log("cardData:", cardData)

    };

    // now NewUpdatedCard this variable is equal to `SingleCard` component with additional top quality tag 
    const NewUpdatedCard = UpdateSingleCard(SingleCard);
    // console.log("new Updated Card :", NewUpdatedCard);

    return <div>
        <div>
            <h1 style={{ textAlign: "center", fontFamily: "cursive", marginTop: "15px" }}>{resData[0]?.card?.card?.text}</h1>
            <p style={{ textAlign: "center", fontFamily: "cursive", marginTop: "15px" }}>{resData[2]?.card?.card?.info?.avgRating} - ({resData[2]?.card?.card?.info?.totalRatingsString}) - {resData[2]?.card?.card?.info?.costForTwoMessage}</p>
        </div>
        {
            cardData.map((item) => {
                // console.log(parseFloat(item?.card?.info?.ratings?.aggregatedRating?.rating));
                return (
                    item?.card?.info?.ratings?.aggregatedRating?.rating < 4.5 ?
                        <SingleCard item={item} key={item?.card?.info.id} /> :
                        <NewUpdatedCard item={item} key={item?.card?.info.id} />
                )
            })
        }
    </div>
};

export default MenuCard;
