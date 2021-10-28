import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'reactstrap';

function ButtonsSelectDrums({ setDrums }) {
  return (
    <Col xs='12'>
      <Button onClick={() => setDrums(false)} color='primary'>
        Gaita
      </Button>
      <Button onClick={() => setDrums(true)} className='mx-3' color='warning'>
        Percusión
      </Button>
      <Link className='btn btn-success' to='/retrouso'>
        VOLVER
      </Link>
    </Col>
  );
}

export default ButtonsSelectDrums;
