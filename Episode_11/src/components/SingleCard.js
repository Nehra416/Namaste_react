import React from "react";

const SingleCard = ({ item }) => {
    const { name, price, description, imageId } = item?.card?.info;
    const { rating, ratingCountV2 } = item?.card?.info?.ratings?.aggregatedRating;

    return (
        <div className="recommendedCards" >
            <div className="recText" style={{ fontFamily: "sans-serif" }}>
                <h2 style={{ fontFamily: "cursive" }}>{name}</h2>
                <span style={{ fontWeight: "600" }}>Rs. {price / 100}</span>
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
};

// This is the higher order component...

export const UpdateSingleCard = (Component) => {
    // here we return a component not jsx code like other components
    // here we get the props for the Component and pass this to component
    return ({ item }) => {
        // this nested componet return the jsx like others
        return (
            <>
                <div className="topQualityDiv">
                    <span className="topQuality">Top Quality</span>
                </div>
                <Component item={item} />
            </>
        )
    }
};

export default SingleCard;
