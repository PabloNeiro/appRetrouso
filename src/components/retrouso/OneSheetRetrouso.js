import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import mallou from '../../database/mallou.svg';
import chao from '../../database/chao.svg';

function OneSheetRetrouso() {
  const [drums, setDrums] = useState(false);
  let { id } = useParams();

  return (
    <>
      <Row className=' text-center mt-3'>
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
      </Row>
      <Row>
        {id == 1 && drums ? (
          <img src={chao} alt='invernia' height='100%' width='100%'></img>
        ) : (
          id == 1 && !drums && <img src={mallou} alt={id} height='100%' width='100%'></img>
        )}

        {id == 2 && drums ? (
          <img src={mallou} alt={id} height='100%' width='100%'></img>
        ) : (
          id == 2 && !drums && <img src={chao} alt='invernia' height='100%' width='100%'></img>
        )}
      </Row>
    </>
  );
}

export default OneSheetRetrouso;
