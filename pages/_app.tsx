import Link from 'next/link';
import '../styles/_app.sass';

export default ({ Component, props }) => <>
  <h1><Link href='/'>sumi.latinise</Link></h1>
  <Component {...props} />
</>

