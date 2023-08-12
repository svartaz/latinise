import { useState } from 'react'
import { convert } from '../libs/convert/yue'

export default ({ props }) => {
  const [value, setValue] = useState('人人生而平等，喺尊嚴同埋權利上一律平等。佢哋有理性同埋良心，而且應當以兄弟關係嘅精神相對待。')

  return <>
    <h2>YUE cantonese</h2>
    <textarea lang='zh-yue' value={value} onChange={event => setValue(event.target.value)}></textarea>
    <div className='zh' lang='zh-yue' style={{ fontSize: '300%' }}>
      {
        convert(value).map(datum =>
          'raw' in datum ? datum.raw : <ruby>{datum.hans}<rt>{datum.latn}</rt></ruby>
        )
      }
    </div>
  </>
}

