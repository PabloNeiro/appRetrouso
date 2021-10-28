import React from 'react';
import { Col, Row } from 'reactstrap';
import InverniaHome from './InverniaHome';
import NewsHome from './News';
import RetrousoHome from './RetrousoHome';

function Home() {
  return (
    <Row className='text-center'>
      <Col xs={12} className='mt-5'>
        <NewsHome />
      </Col>
      <Col xs={6} className='mt-5'>
        <RetrousoHome />
      </Col>
      <Col xs={6} className='mt-5'>
        <InverniaHome />
      </Col>
    </Row>
  );
}

export default Home;
