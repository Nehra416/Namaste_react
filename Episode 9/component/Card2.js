import React from "react";
import useDataFetch from "../utils/useDataFetch";
import { Link } from "react-router-dom";

const Card = () => {
    const { data, loading, error } = useDataFetch("sachin-beniwal");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1 style={{ textAlign: "center", fontFamily: "cursive", marginTop: "15px" }}>
                {data?.name}
            </h1>
            <p style={{ textAlign: "center", fontFamily: "cursive", marginTop: "15px" }}>
                {data?.login}
            </p>
            <Link to={"/"} style={{ display: "flex", justifyContent: "center" }}><button>Click to return 1st card</button></Link>
        </div>
    );
};

/**
 * what it will show on ui sequence
 * not rendered
 * loading...
 * then api data
 */

export default Card;
