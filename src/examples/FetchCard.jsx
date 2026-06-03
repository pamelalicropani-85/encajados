import React from 'react'
import Button from 'react-bootstrap/Button';

const FetchCard = ({pj}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={pj.src.medium} className="card-img-top" alt={pj.alt}/>
        <div className="card-body">
            <p className="card-text">{pj.photographer}</p>
            <Button variant="secondary">Comprar</Button>
        </div>
    </div>
    )
}

export default FetchCard