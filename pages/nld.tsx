import { convert } from '../libs/convert/nld';
import { useState } from 'react';

export default ({ props }) => {
  const [value, setValue] = useState('Alle mensen worden vrij en gelijk in waardigheid en rechten geboren. Zij zijn begiftigd met verstand en geweten, en behoren zich jegens elkander in een geest van broederschap te gedragen.')

  return <>
    <h2>NLD dutch</h2>
    <textarea lang='nl' value={value} onChange={event => setValue(event.target.value)}></textarea>
    <div lang='nl' style={{ fontSize: '300%' }}>
      {convert(value)}
    </div>
  </>
}

