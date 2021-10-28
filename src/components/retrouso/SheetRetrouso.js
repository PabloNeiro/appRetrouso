import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { info } from '../../database/database';
import SelectSheet from './SelectSheet';
import TableSheet from './TableSheet';

function SheetRetrouso() {
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
    <>
      <Row className='mt-2'>
        <Col xs='6'></Col>
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
    </>
  );
}

export default SheetRetrouso;
