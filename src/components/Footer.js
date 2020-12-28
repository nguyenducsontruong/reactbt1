import React from 'react';
import {Container, Row, Col,  ListGroup } from 'react-bootstrap'

const css = {backgroundColor: '#40658a', marginTop: '1%', padding: '3% 3%'};
const cssl = { margin: '1%'};

function Footer() {
    return (
        <div style={css}>
        <Container >
  <Row >
    <Col xs={6} md={4}>
                <ListGroup style={cssl}>
            <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
    </Col>
    <Col xs={6} md={4}>
                <ListGroup style={cssl}>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>       
            <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
    </Col>
    <Col xs={6} md={4}>
     
    </Col>
  </Row>
</Container>
</div>
    )
}

export default Footer
