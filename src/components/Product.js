import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Anh from './Anh';

function Product() {
    return (
        <div>
            <Container>
            <Row>
                <Col><Anh /></Col>
                <Col><Anh /></Col>
                <Col><Anh /></Col>
            </Row>
            <Row>
                <Col><Anh /></Col>
                <Col><Anh /></Col>
                <Col><Anh /></Col>
            </Row>
            </Container>
        </div>
    )
}

export default Product
