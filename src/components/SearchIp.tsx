import React from 'react'

const SearchIp = () => {
  return (
    <div className="flex justify-center w-11/12 desktop:w-1/3 h-12">
        <input className="rounded-l-lg px-5 w-3/4 desktop:w-full h-12" type="text" placeholder="Search for any IP address or domain" />
        <button className="flex items-center justify-center w-12 text-white bg-very_dark_gray rounded-r-lg"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg></button>
    </div>
  )
}

export default SearchIp