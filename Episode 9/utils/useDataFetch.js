import { useState, useEffect } from "react";
import { githubUserApi } from "./constants";

const useDataFetch = (id) => {
    // why we can't return direct or return by store data in local variable
    // why we store the response in state variable then return
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`${githubUserApi}${id}`);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return { data, loading, error };
}

export default useDataFetch;
