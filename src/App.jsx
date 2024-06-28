import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import AddTask from './components/AddTask';
import Navbar from './components/Navbar';


function App() {
  return (
    <Container>
      <Navbar />
      <Row className='justify-content-md-center'>
        <Col lg='6'>
          <AddTask />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
