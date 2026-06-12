import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({prod}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body className="text-center">
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          ${prod.price}
        </Card.Text>
        <Link className='btn btn-dark' to={'/item/'+prod.id}>Comprar</Link>
      </Card.Body>
    </Card>
  );
}

export default Item;