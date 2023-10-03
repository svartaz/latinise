import { heb } from '../libs/convert';
import { BasicConverter } from '../libs/page';

export default () =>
  BasicConverter('HEB hebrew', 'he', /.+/, heb, false,
    'כל בני אדם נולדו בני חורין ושווים בערכם ובזכויותיהם. כולם חוננו בתבונה ובמצפון, לפיכך חובה עליהם לנהוג איש ברעהו ברוח של אחוה.');