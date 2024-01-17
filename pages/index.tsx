import Link from "next/link"

const title = 'sumi.latinise'
export default ({ props }) => <>
  <p>latinisation and improved orthography</p>
  <ul>
    <li>indo-european</li>
    <ul>
      <li><Link href='san'>san</Link></li>
      <li><Link href='grc'>grc</Link></li>
      <li><Link href='nld'>nld</Link></li>
      <li><Link href='pol'>pol</Link></li>
      <li><Link href='rus'>rus</Link></li>
    </ul>
    <li>sino-tibetan</li>
    <ul>
      <li><Link href='cmn'>cmn</Link></li>
      <li><Link href='yue'>yue</Link></li>
    </ul>
    <li><Link href='ara'>ara</Link></li>
    <li><Link href='heb'>heb</Link></li>
    <li><Link href='ind'>ind</Link></li>
    <li><Link href='kor'>kor</Link></li>
  </ul>
</>