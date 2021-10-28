import React from 'react';

function ShowSheet({ id, drums, src, srcdrum }) {
  return (
    <>
      {drums ? (
        <img src={srcdrum} alt='invernia' height='100%' width='100%'></img>
      ) : (
        <img src={src} alt={id} height='100%' width='100%'></img>
      )}
    </>
  );
}

export default ShowSheet;
