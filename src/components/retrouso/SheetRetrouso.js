import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Table } from 'reactstrap';
import { info } from '../../database/database';

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
          <h4>
            <select name='select' onChange={filterSong}>
              <option value='todas'>Mostrar todas</option>
              <option value='pasodoble'>Pasodobles</option>
              <option value='muiñeira'>Muiñeiras</option>
              <option value='xota'>Xotas</option>
              <option value='rumba'>Rumbas</option>
              <option value='foliada'>Foliadas</option>
              <option value='vals'>Vals</option>
            </select>
          </h4>
        </Col>
        <Col xs='2'></Col>
      </Row>

      <Table striped>
        <thead>
          <tr className='text-center'>
            <th>Nome</th>
            <th>Partituras</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((value, i) => (
              <tr key={i} className='text-center'>
                <td>
                  <b>{value.name}</b>
                </td>
                <td>
                  <Link className='btn btn-success' to={`/info/${value.id}`}>
                    VER
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default SheetRetrouso;
