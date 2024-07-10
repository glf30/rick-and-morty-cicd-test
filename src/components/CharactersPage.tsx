import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries/Queries';
import { Alert, Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CharacterProps {
  id: string;
  name: string;
  image: string;
}

const CharactersPage = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{error.message}</p>
      </Alert>
    );
  }

  return (
    <Container>
      <h1>Characters List</h1>
      <Row>
        {data.characters.results.map(({ id, name, image }: CharacterProps) => (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link to={`/${id}`}>
                        <Button variant="primary">Go to Character</Button>
                    </Link>
                    </Card.Body>
                </Card> 
            </Col>
        ))}
        ;
      </Row>
    </Container>
  );
};
export default CharactersPage;