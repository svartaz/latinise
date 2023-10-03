import { nld } from '../libs/convert';
import { BasicConverter } from '../libs/page';

export default () =>
  BasicConverter('NLD dutch', 'nl', /[a-z]+/ig, nld, true,
    'Alle mensen worden vrij en gelijk in waardigheid en rechten geboren. Zij zijn begiftigd met verstand en geweten, en behoren zich jegens elkander in een geest van broederschap te gedragen.');