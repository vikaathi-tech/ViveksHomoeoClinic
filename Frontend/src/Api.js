import config from './Config.json';
import { useState, useEffect } from 'react'

export function FetchData(Controller, Action, Params) {
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)
    const [datalist, setDataList] = useState([])
    console.log(`${Controller},${Action}`);
    const fetchItems = async () => {
        try {
            const BASE_URL = config.API_URL;
            const req_url = `${BASE_URL}/${Controller}/${Action}`
            console.log(req_url);
            const response = await fetch(req_url);
            console.log(response);
            if (!response) throw Error("Data Not Received")
            const listItems = await response.json();
            setDataList(listItems);
        }
        catch (err) {
            setFetchError(err.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchItems();
    }, []);
};

