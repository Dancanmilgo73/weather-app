import React from 'react'

const SeachBar = (props) => {
    const { query = '', search, handleQueryInput } = props;
  return (
    <div className="search-box">
        <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange = {e => handleQueryInput(e.target.value)}
            value = {query}
            onKeyPress = {search}
        />
    </div>
  )
}

export default SeachBar