import React from 'react';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './home.css';

function CardHome({ img, ancor, name }) {
  return (
    <Card>
      <CardMedia component='img' alt='Retrouso' height='140' image={img} />
      <div className='bgName'>
        <Link to={ancor} className='btn btn-secondary mt-4 mb-4'>
          {name}
        </Link>
      </div>
    </Card>
  );
}

export default CardHome;
