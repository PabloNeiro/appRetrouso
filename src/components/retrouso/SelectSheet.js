import React from 'react';

function SelectSheet({ filterSong }) {
  const options = [
    { name: 'Mostrar todo', identificate: 'todas' },
    { name: 'Pasodobles', identificate: 'pasodoble' },
    { name: 'Muiñeiras', identificate: 'muiñeira' },
    { name: 'Xotas', identificate: 'xota' },
    { name: 'Rumbas', identificate: 'rumba' },
    { name: 'Foliadas', identificate: 'foliada' },
    { name: 'Vals', identificate: 'vals' },
  ];

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
