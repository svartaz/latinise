import { kor } from '../libs/convert';
import { BasicConverter } from '../libs/page';

export default () =>
  BasicConverter('KOR korean', 'kr', /[^ ]+/g, kor, false,
    '모든 인간은 태어날 때부터 자유로우며 그 존엄과 권리에 있어 동등하다. 인간은 천부적으로 이성과 양심을 부여받았으며 서로 형제애의 정신으로 행동하여야 한다.');