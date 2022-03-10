import React from 'react';
import "./search.css";

export default function Search({input:keyword, onChange:setKeyword}) {
  const styling = {fontFamily: 'EB Garamond', fontSize: '12px'}
  
  return (
    <div className="search">
      <div className="top-right">
          <i class="searchIcon fa-solid fa-magnifying-glass"></i>
          <input
            className="search-input"
            style={styling}
            name="search" 
            key="random1"
            value={keyword}
            placeholder={"SEARCH THE SITE"}
            onChange={(e) => setKeyword(e.target.value)} 
        />
    </div>
    </div>
  )
}
