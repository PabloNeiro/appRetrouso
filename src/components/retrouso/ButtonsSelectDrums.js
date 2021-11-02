import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'reactstrap';

function ButtonsSelectDrums({ setDrums }) {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Col xs='12'>
      <Button onClick={() => setDrums(false)} color='primary'>
        GAITA
      </Button>
      <Button onClick={() => setDrums(true)} className='mx-3' color='warning'>
        PERCUSIÓN
      </Button>
      <Button className='btn btn-danger' onClick={() => goBack()}>
        VOLVER
      </Button>
    </Col>
  );
}

export default ButtonsSelectDrums;
