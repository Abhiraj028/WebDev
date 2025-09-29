import { useEffect, useState } from "react";

export function useFetch(url){
    const [fetchData,setFetchData] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(() =>{
        setLoading(true)
        async function fetchUrl(){
            const data = await fetch(url)
            const response = await data.json()
            setFetchData(response)
            setLoading(false)
        }
        fetchUrl()
    },[url])

    
    return {fetchData, loading}
}