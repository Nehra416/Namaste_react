import React from "react";
import useDataFetch from "../utils/useDataFetch";
import { Link } from "react-router-dom";

const Card = () => {
    const { data, loading, error } = useDataFetch("Nehra416");

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
            <Link to={"/secondCard"} style={{ display: "flex", justifyContent: "center" }}><button>Click for lazy loading</button></Link>
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
