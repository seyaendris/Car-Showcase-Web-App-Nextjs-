"use client"

import React from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
  const handleSearch = () => {

  }
  return (
    <form 
      onSubmit={handleSearch}
      className='seaechbar'
      >
        <div className='searchbar__item'>
          <SearchManufacturer />
        </div>
      
    </form>
  )
}

export default SearchBar
