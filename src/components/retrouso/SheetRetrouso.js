import { Chip } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { info } from '../../database/database';

function SheetRetrouso() {
  return (
    <>
      <Table striped>
        <thead>
          <tr className='text-center'>
            <th>Nome</th>
            <th>Partituras</th>
            {/* <th>Extra</th> */}
          </tr>
        </thead>
        <tbody>
          {info.map((value, i) => (
            <tr className='text-center'>
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
