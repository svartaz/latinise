import { grc } from '../libs/convert';
import { BasicConverter } from '../libs/page';

export default () =>
  BasicConverter('GRC greek', 'el', /\p{sc=Greek}+/iug, grc, true,
    'Συνέθιζε δὲ ἐν τῷ νομίζειν μηδὲν πρὸς ἡμᾶς εἶναι τὸν θάνατον ἐπεὶ πᾶν ἀγαθὸν καὶ κακὸν ἐν αἰσθήσει· στέρησις δέ ἐστιν αἰσθήσεως ὁ θάνατος.');