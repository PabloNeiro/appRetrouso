import React from 'react';

function SelectSheet({ filterSong }) {
  return (
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
  );
}

export default SelectSheet;
