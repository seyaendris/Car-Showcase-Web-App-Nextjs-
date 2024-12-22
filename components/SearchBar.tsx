"use client"

import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')


  const handleSearch = () => {

  }

  return (
    <form 
      onSubmit={handleSearch}
      className='seaechbar'
      >
        <div className='searchbar__item'>
          <SearchManufacturer 
            manufacturer={manufacturer} 
            setManufacturer={setManufacturer}
          />
        </div>
      
    </form>
  )
}

export default SearchBar
