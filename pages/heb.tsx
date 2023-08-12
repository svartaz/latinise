import { convert } from '../libs/convert/heb';
import { useState } from 'react'

export default ({ props }) => {
  const [value, setValue] = useState('כל בני אדם נולדו בני חורין ושווים בערכם ובזכויותיהם. כולם חוננו בתבונה ובמצפון, לפיכך חובה עליהם לנהוג איש ברעהו ברוח של אחוה.')

  return <>
    <h2>HEB hebrew</h2>
    <textarea lang='he' value={value} onChange={event => setValue(event.target.value)}></textarea>
    <div style={{ fontSize: '300%' }}>
      {convert(value)}
    </div>
  </>
}

