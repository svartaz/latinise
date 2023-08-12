import { convert } from '../libs/convert/ind'
import { useState } from 'react'

export default ({ props }) => {
  const [value, setValue] = useState('Semua orang dilahirkan merdeka dan mempunyai martabat dan hak-hak yang sama. Mereka dikaruniai akal dan hati nurani dan hendaknya bergaul satu sama lain dalam semangat persaudaraan.')

  return <>
    <h2>IND indonesian</h2>
    <textarea lang='id' value={value} onChange={event => setValue(event.target.value)}></textarea>
    <div lang='id' style={{ fontSize: '300%' }}>
      {convert(value)}
    </div>
  </>
}

