import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../queries/Queries';
import { Alert, Button, Card, Spinner } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

interface EpisodeProps {
    name: string,
    episode: string
}

const CharacterPage = () => {
    // access parameter props with useParams()
  const { id } = useParams()
  //const id = 1;
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

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

  const { name, image, episode } = data.character
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={'/'}>
            <Button variant="primary">Go to All Characters</Button>
        </Link>
        <h2>Featured Episodes</h2>
        {episode.map((episode: EpisodeProps) => (
            <p>{episode.name}: {episode.episode}</p>
        ))}
      </Card.Body>
    </Card>
  );
};

export default CharacterPage;