import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import libri from '../data/history.json'

function MyBooks() {
  return (
    <>
      {libri.map((books) => (
        <Card style={{ width: '18rem' }} className=" m-2" key={books.asin}>
          <Card.Img style={{ height: '400px' }} variant="top" src={books.img} />
          <hr />
          <Card.Body className="d-flex flex-column justify-content-around">
            <Card.Title>{books.title}</Card.Title>
            <Card.Text>
              <p>Categoria: {books.category}</p>
            </Card.Text>
            <Card.Text>
              <p>Prezzo: {books.price}€ </p>
            </Card.Text>
            <Button className=" align-self-end" variant="success">
              Buy
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default MyBooks
