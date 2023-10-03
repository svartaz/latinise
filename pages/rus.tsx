import { rus } from '../libs/convert';
import { BasicConverter } from '../libs/page';

export default () =>
  BasicConverter('RUS russian', 'ru', /\p{sc=Cyrillic}+/igu, rus, true,
    'Все люди рождаются свободными и равными в своем достоинстве и правах. Они наделены разумом и совестью и должны поступать в отношении друг друга в духе братства.');