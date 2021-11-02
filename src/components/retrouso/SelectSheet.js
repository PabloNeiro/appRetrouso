import React from 'react';
import { options } from '../../database/database';

function SelectSheet({ filterSong }) {
  return (
    <h4>
      <select name='select' onChange={filterSong}>
        {options.map((element, i) => (
          <option key={i} value={element.identificate}>
            {element.name}
          </option>
        ))}
      </select>
    </h4>
  );
}

export default SelectSheet;
