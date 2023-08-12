import { convert } from '../libs/convert/cmn'
import { useState } from 'react'

export default ({ props }) => {
  const [value, setValue] = useState('人人生而自由，在尊嚴和權利上一律平等。他們賦有理性和良心，並應以兄弟關係的精神相對待。')

  return <>
    <h2>CMN mandarin</h2>
    <textarea lang='zh-cmn-Hant' value={value} onChange={event => setValue(event.target.value)}></textarea>
    <div className='zh' style={{ fontSize: '300%' }} lang='zh-cmn-Hant'>
      {
        convert(value).map(datum =>
          'raw' in datum ? datum.raw : <ruby>{datum.hans}<rt style={{ whiteSpace: 'pre-line' }}>{datum.latns.join('\n')}</rt></ruby>
        )
      }
    </div >
  </>
}

