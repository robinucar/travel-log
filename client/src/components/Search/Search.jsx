import React from 'react';
import "./search.css";

export default function Search({input:keyword, onChange:setKeyword}) {
  const styling = {fontFamily: 'Fredoka', fontSize: '16px'}
  
  return (
    <div className="search">
      <div className="top-right">
        <i className="searchIcon fa fa-search"></i>
          <input
            className="search-input"
            style={styling}
            name="search" 
            key="random1"
            value={keyword}
            placeholder={"Search Destinations"}
            onChange={(e) => setKeyword(e.target.value)} 
        />
    </div>
    </div>
  )
}
