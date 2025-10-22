import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

function MyBootstrap() {
  return (
    <div>
      <Button variant="dark" size="lg">
        hello
      </Button>
      <Button variant="warning" size="md">
        hello
      </Button>
      <Button variant="primary" size="sm">
        hello
      </Button>
      <Button variant="secondary">hello</Button>
      <Button variant="success">hello</Button>
      <Button variant="danger">hello</Button>
      <Button variant="danger" active>
        hello
      </Button>
      <Button variant="danger" disabled>
        hello
      </Button>
      <Button variant="danger" href="https:/www.google.com">
        hello
      </Button>
      <Alert variant="danger">
        <Alert.Heading>there is something wrong</Alert.Heading>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit odio
          explicabo, possimus similique doloribus laudantium.
        </p>
        <Alert.Link>hello i am link</Alert.Link>
      </Alert>
    </div>
  );
}

export default MyBootstrap;
