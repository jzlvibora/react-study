import finnHub from "../api/finnHub";
import { useState, useEffect} from "react";

export const StockList = ()=>{
    const [stock,setStock] = useState([]);
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);
    useEffect(()=>{
        let isMounted = true;
        const fetchData = async()=>{
           
            try{
                const responses = await Promise.all(
                    watchList.map((x)=>{
                        return finnHub.get("/quote",{
                            params:{
                                symbol:x
                            }
                        })
                    }
                    )
                    )
                console.log(responses);
                const data = responses.map((res)=>{
                    return{
                        data:res.data,
                        symbol:res.config.params.symbol
                    }
                  
                })

                console.log(data);
                console.log('Stock',stock)

                if(isMounted){
                    setStock(data)
                }
            }

            catch(err){

            }
        }

        fetchData()
        return()=> (isMounted=false)
    }, [])
    
    return (
        <table className="table hover mt-5">
            <thead style={{color:"rgb(78,89,102"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Last</th>
                    <th scope="col">Chg</th>
                    <th scope="col">Chg%</th>
                    <th scope="col">High</th>
                    <th scope="col">Low</th>
                    <th scope="col">Open</th>
                    <th scope="col">PClose</th>
                </tr>
            </thead>
            <tbody>
                {stock.map((stockData)=>{
                    return (
                        <tr className="table-row" key={stockData.symbol}>
                            <th scope="row">{stockData.symbol}</th>
                            <td>{stockData.data.c}</td>
                            <td>{stockData.data.d}</td>
                            <td>{stockData.data.dp}</td>
                            <td>{stockData.data.h}</td>
                            <td>{stockData.data.l}</td>
                            <td>{stockData.data.o}</td>
                            <td>{stockData.data.pc}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}