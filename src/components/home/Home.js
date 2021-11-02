import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import NavBar from '../navbar/NavBar';
import './home.css';
import CardHome from './CardHome';

function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Row className='bgHome'>
          <Col xs={12} md={6} className='mt-5'>
            <CardHome img='retrouso.jpg' ancor='/retrouso' name='RETROUSO' />
          </Col>
          <Col xs={12} md={6} className='mt-5'>
            <CardHome img='invernia2.jpg' ancor='/invernia' name='INVERNÍA' />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
