import { san } from '../libs/convert';
import { BasicConverter } from '../libs/page';

export default () =>
  BasicConverter('SAN sanskrit', 'sa', /(\p{sc=Devanagari}|।|ऽ)+/ug, san, false,
    'सर्वे मानवाः स्वतन्त्राः समुत्पन्नाः वर्तन्ते अपि च, गौरवदृशा अधिकारदृशा च समानाः एव वर्तन्ते। एते सर्वे चेतना-तर्क-शक्तिभ्यां सुसम्पन्नाः सन्ति। अपि च, सर्वेऽपि बन्धुत्व-भावनया परस्परं व्यवहरन्तु।');