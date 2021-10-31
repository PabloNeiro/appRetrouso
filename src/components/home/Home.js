import React from 'react';
import { Col, Row } from 'reactstrap';
import NavBar from '../navbar/NavBar';
import InverniaHome from './InverniaHome';
import RetrousoHome from './RetrousoHome';

function Home() {
  return (
    <>
      <NavBar />
      <Row className='text-center'>
        <Col xs={12} md={6} className='mt-5'>
          <RetrousoHome />
        </Col>
        <Col xs={12}  md={6} className='mt-5'>
          <InverniaHome />
        </Col>
      </Row>
    </>
  );
}

export default Home;
