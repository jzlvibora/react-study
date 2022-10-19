import finnHub from "../api/finnHub";
import { useState, useEffect} from "react";

export const StockList = ()=>{
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await finnHub.get("/quote",{
                    params:{
                        symbol:"MSFT"
                    }
                });
                console.log(response)
            }
            catch(err){

            }
        }
        fetchData()
    }, [])
    
    return (
        <div>StockList</div>
    )
}