import React, {useEffect, useState} from 'react'
import FetchList from './FetchList'


const FetchContainer = () => {
const [data, setData]= useState([])
 useEffect(()=>{
    fetch('https://api.pexels.com/v1/search?query=abstract&per_page=15', {
      headers: { Authorization: import.meta.env.VITE_PEXELS_API_KEY }
    })
    .then((response)=> response.json())
    .then((data)=> setData(data.photos))
    .catch((error)=> console.log(error))
 },[])

 console.log(data)
  return (
    <div>
        <h1>FetchContainer</h1>
        <FetchList data={data}/>
    </div>
  )
}

export default FetchContainer