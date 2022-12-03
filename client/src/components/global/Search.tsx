import React, { useState } from 'react'

function Search() {
    const [search, setSearch] = useState('')
  return (
    <div className='w-full'>
        <input type="text" value={search}  placeholder="Enter your search.." 
        onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Search