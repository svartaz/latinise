import { ind } from '../libs/convert';
import { BasicConverter } from '../libs/page';

export default () =>
  BasicConverter('IND indonesian', 'id', /[a-zéäëïöü]+/ig, ind, true,
    'Semua orang dilahirkan merdeka dan mempunyai martabat dan hak-hak yang sama. Mereka dikaruniai akal dan hati nurani dan hendaknya bergaul satu sama lain dalam semangat persaudaraan.');

