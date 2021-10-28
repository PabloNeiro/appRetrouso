import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

function RetrousoHome() {
  return (
    <Card>
      <CardMedia component='img' alt='green iguana' height='140' image='retrouso.jpg' />
      <Link to='/retrouso' className='btn btn-warning mt-4 mb-4'>
        RETROUSO
      </Link>
    </Card>
  );
}

export default RetrousoHome;
