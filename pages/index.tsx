import Link from "next/link"

const title = 'sumi.latinise'
export default ({ props }) => <>
  <p>latinisation and improved orthography of languages.</p>
  <ul>
    <li><Link href='cmn'>cmn</Link></li>
    <li><Link href='yue'>yue</Link></li>
    <li><Link href='ind'>ind</Link></li>
    <li><Link href='nld'>nld</Link></li>
    <li><Link href='pol'>pol</Link></li>
    <li><Link href='kor'>kor</Link></li>
    <li><Link href='heb'>heb</Link></li>
  </ul>
</>