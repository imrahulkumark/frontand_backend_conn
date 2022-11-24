import logo from "./logo.svg";
import { Container, Row, Col, Button,Card,Form } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <Card>
            <Card.Header>
              <p className="lead">Register</p>
            </Card.Header>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="custname"></Form.Control>
                <Form.Group>
                  <Form.Control type="text" placeholder="custmobile" />
                </Form.Group>
                <Button type='submit' value='submit'>submit</Button>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
