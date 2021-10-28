import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
function NewsHome() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' alt='green iguana' height='140' image='ouzande.jpg' />
      <Link to='/retrouso' className='btn btn-info mt-4 mb-4'>
        A FERVENZA DE OUZANDE
      </Link>
    </Card>
  );
}

export default NewsHome;
