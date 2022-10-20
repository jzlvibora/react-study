import finnHub from "../api/finnHub";
import { useState, useEffect} from "react";

export const StockList = ()=>{
    const [stock,setStock] = useState();
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);
    useEffect(()=>{
        let isMounted = true;
        const fetchData = async()=>{
            const responses = [];
            try{
                const responses = Promise.all(
                    [
                    finnHub.get("/quote",{
                    params:{
                        symbol:"GOOGL"
                    }
                }),
                 finnHub.get("/quote",{
                    params:{
                        symbol:"MSFT"
                    }
                }),
                finnHub.get("/quote",{
                    params:{
                        symbol:"AMZN"
                    }
                })
            ]
        //     watchList.map((x)=>{
        //         finnHub.get("/quote",{
        //                     params:{
        //                         symbol:x
        //                     }
        //     })
        // }
        //         ),)
                )

                console.log(responses);
                if(isMounted){
                    setStock(responses)
                }
            }
            catch(err){

            }
        }
        fetchData()
        return()=> (isMounted=false)
    }, [])
    
    return (
        <div>StockList</div>
    )
}