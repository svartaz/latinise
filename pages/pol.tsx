import { pol } from '../libs/convert';
import { BasicConverter } from '../libs/page';

export default ({ props }) =>
  BasicConverter('POL polish', 'pl', /[a-ząćęłńóśźż]+/ig, pol, true,
    'Wszyscy ludzie rodzą się wolni i równi pod względem swej godności i swych praw. Są oni obdarzeni rozumem i sumieniem i powinni postępować wobec innych w duchu braterstwa.');