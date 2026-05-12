import React from 'react'
import FetchCard from './FetchCard'

const FetchList = ({data}) => {
  return (
    <div>
        {data.map((pj)=> <FetchCard key={pj.id} pj={pj}/>)}
    </div>
  )
}

export default FetchList