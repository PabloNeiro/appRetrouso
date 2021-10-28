import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Row } from 'reactstrap';
import ShowSheet from './ShowSheet';
import ButtonsSelectDrums from './ButtonsSelectDrums';
import { info } from '../../database/database';

function OneSheetRetrouso() {
  const [drums, setDrums] = useState(false);
  let { id } = useParams();

  const musicSheet = info.find((element) => element.id == id);

  return (
    <>
      <Row className=' text-center mt-3'>
        <ButtonsSelectDrums setDrums={setDrums} />
      </Row>
      <Row>
        <ShowSheet id={id} drums={drums} src={musicSheet.sheet} srcdrum={musicSheet.sheetDrum} />
      </Row>
    </>
  );
}

export default OneSheetRetrouso;
