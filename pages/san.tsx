import { convert } from '../libs/convert/san'
import { useState } from 'react'

export default ({ props }) => {
  const [value, setValue] = useState('सर्वे मानवाः स्वतन्त्राः समुत्पन्नाः वर्तन्ते अपि च, गौरवदृशा अधिकारदृशा च समानाः एव वर्तन्ते। एते सर्वे चेतना-तर्क-शक्तिभ्यां सुसम्पन्नाः सन्ति। अपि च, सर्वेऽपि बन्धुत्व-भावनया परस्परं व्यवहरन्तु।')

  return <>
    <h2>SAN sanskrit</h2>
    <textarea lang='sa' value={value} onChange={event => setValue(event.target.value)}></textarea>
    <div lang='sa' style={{ fontSize: '300%' }}>
      {convert(value)}
    </div>
  </>
}

