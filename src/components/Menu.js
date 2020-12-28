import React from 'react';
import { Nav , Form, Button, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';

const css = { margin: '1%'};

function Menu() {
    return (
    
        <div style={css}>
                <Nav variant="pills" defaultActiveKey="/home" className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/product" >Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" >Service</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" href="/lienhe">Contact</Nav.Link>
                </Nav.Item>

                <Form inline>
  <Form.Label htmlFor="inlineFormInputName2" srOnly>
    Name
  </Form.Label>
  <Form.Control
    className="mb-2 mr-sm-2"
    id="inlineFormInputName2"
    placeholder="Jane Doe"
  />
  <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
    Username
  </Form.Label>
  <InputGroup className="mb-2 mr-sm-2">
    <InputGroup.Prepend>
      <InputGroup.Text>@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="inlineFormInputGroupUsername2" placeholder="Username" />
  </InputGroup>
  <Form.Check
    type="checkbox"
    className="mb-2 mr-sm-2"
    id="inlineFormCheck"
    label="Remember me"
  />
  <Button type="submit" className="mb-2">
    Submit
  </Button>
</Form>

                </Nav>

        </div>
        
    )
}

export default Menu
