import { convert } from '../libs/convert/grc'
import { useState } from 'react'

export default ({ props }) => {
  const [value, setValue] = useState('Συνέθιζε δὲ ἐν τῷ νομίζειν μηδὲν πρὸς ἡμᾶς εἶναι τὸν θάνατον ἐπεὶ πᾶν ἀγαθὸν καὶ κακὸν ἐν αἰσθήσει· στέρησις δέ ἐστιν αἰσθήσεως ὁ θάνατος.')

  return <>
    <h2>Grc greek</h2>
    <textarea lang='he' value={value} onChange={event => setValue(event.target.value)}></textarea>
    <div lang='he' style={{ fontSize: '300%' }}>
      {convert(value)}
    </div>
  </>
}

