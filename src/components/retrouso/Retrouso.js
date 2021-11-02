import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { info } from '../../database/database';
import SelectSheet from './SelectSheet';
import TableSheet from './TableSheet';
import './retrouso.css';

function Retrouso() {
  const [list, setList] = useState();

  const getList = () => setList(info);
  useEffect(() => {
    getList();
  }, []);

  const filterSong = (event) => {
    const filterList = info.filter(function (value) {
      if (event.target.value === 'todas') {
        return info;
      }
      if (event.target.value !== 'todas') {
        return value.type === event.target.value;
      }
    });

    setList(filterList);
  };

  return (
    <Container className='bgListSong'>
      <Row>
        <Col xs='6'>
          <Link className='btn btn-dark' to={`/`}>
            INICIO
          </Link>
        </Col>
        <Col xs='6'>
          <SelectSheet filterSong={filterSong} />
        </Col>
        <Col xs='2'></Col>
      </Row>
      <Row>
        <Col xs='12'>
          <TableSheet list={list} />
        </Col>
      </Row>
    </Container>
  );
}

export default Retrouso;
