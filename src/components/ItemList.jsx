import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap', gap:'2rem', padding:'2rem'}}>
        {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList