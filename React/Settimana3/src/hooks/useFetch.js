import { useEffect, useState } from "react"

const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    data: {}
}

export const useFetch = (url, options = DEFAULT_OPTIONS) => {
    options = {...DEFAULT_OPTIONS, ...options};

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const dataFetch = async () => {
        if(!error) setError(false);
        if(!loading) setLoading(true);

        try {
            const response = await fetch(url);
        
            if(!response.ok){
                throw new Error("Error during fetch data");
            }

            const result = await response.json();
            setData(result);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        dataFetch();
    }, [url])

    return {
        data,
        error,
        loading,
        reload: dataFetch
    }
}