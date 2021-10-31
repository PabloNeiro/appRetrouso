import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

function TableSheet({ list }) {
  return (
    <Table striped>
      <thead>
        <tr className='text-center'>
          <th></th>
          <th>Nome</th>
          <th>Partituras</th>
        </tr>
      </thead>
      <tbody>
        {list &&
          list.map((value, i) => (
            <tr key={i} className='text-center'>
              <td>{i + 1}</td>
              <td>
                <b>{value.name}</b>
              </td>
              <td>
                <Link className='btn btn-success' to={`/partituras/${value.id}`}>
                  VER
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default TableSheet;
