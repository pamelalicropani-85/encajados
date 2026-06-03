import React from 'react'
import FetchCard from './FetchCard'

const FetchList = ({data}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
        {data && data.map((pj)=> <FetchCard key={pj.id} pj={pj}/>)}
    </div>
  )
}

export default FetchList