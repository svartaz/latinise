import { convert } from '../libs/convert/pol'
import { useState } from 'react'

export default ({ props }) => {
  const [value, setValue] = useState('Wszyscy ludzie rodzą się wolni i równi pod względem swej godności i swych praw. Są oni obdarzeni rozumem i sumieniem i powinni postępować wobec innych w duchu braterstwa.')

  return <>
    <h2>pol</h2>
    <textarea lang='pl' value={value} onChange={event => setValue(event.target.value)}></textarea>
    <div lang='pl' style={{ fontSize: '300%' }}>
      {convert(value)}
    </div>
  </>
}

