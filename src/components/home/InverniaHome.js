import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
function InverniaHome() {
  return (
    <Card>
      <CardMedia component='img' alt='green iguana' height='140' image='invernia2.jpg' />
      <Link to='/invernia' className='btn btn-success mt-4 mb-4'>
        INVERNÍA
      </Link>
    </Card>
  );
}

export default InverniaHome;
