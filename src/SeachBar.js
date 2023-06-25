import React from 'react'

const SeachBar = (props) => {
    const { query = '', search, handleQueryInput } = props;
  return (
    <div className="search-box">
      <form onSubmit={search} data-testid='form'>
        <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange = {e => handleQueryInput(e.target.value)}
            value = {query}
            name='locationName'
        />
      </form>
    </div>
  )
}

export default SeachBar