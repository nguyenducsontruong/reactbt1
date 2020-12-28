import React from 'react';
import {Container , Row, Col } from 'react-bootstrap';

const css = {backgroundColor: '#40658a', marginTop: '1%', padding: '2%', textAlign: 'left', color: '#fff'};


function End() {
    return (
        <div style={css}>
        <Container >
  <Row >
    <Col xs={6} md={4}>
                <p>Liên hệ</p>
                <p>Về chúng tôi</p>
                <p>Địa chỉ</p>            
    </Col>
    <Col xs={6} md={4}>
                 <p>Liên hệ</p>
                <p>Về chúng tôi</p>
                <p>Địa chỉ</p>  
    </Col>
    <Col xs={6} md={4}>
     
    </Col>
  </Row>
</Container>
        </div>
    )
}

export default End
