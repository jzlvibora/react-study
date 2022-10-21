import { useState, useEffect } from "react";
import finnHub from "../api/finnHub";

export const AutoComplete = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = finnHub.get("/search", {
            params:{
                q:search
            }
        })
        console.log(response)
      } catch {}
    };
    if(search.length>0){
        fetchData();
    }
    
  }
 
  );

  return (
    <div className="w-50 p-5 rounded mx-auto">
      <div className="form-floating dropdown">
        <input
          style={{ backgroundColor: "rgba(145,158,171,0.4)" }}
          type="text"
          id="search"
          className="form-control"
          placeholder="Search"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <label htmlFor="search">Search</label>
        <ul className="dropdown-menu show">
          <li>stock1</li>
          <li>stock2</li>
          <li>stock3</li>
        </ul>
      </div>
    </div>
  );
};
