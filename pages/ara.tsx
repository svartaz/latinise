import { ara } from '../libs/convert';
import { BasicConverter } from '../libs/page';

export default () =>
  BasicConverter('ARA arabic', 'ar', /(\p{sc=Arabic}|،|[\u064B-\u0651])+/igu, ara, false,
    'يولد جميع الناس أحراراً متساوين في الكرامة والحقوق، وقد وهبوا عقلاً وضميراً وعليهم أن يعامل بعضهم بعضاً بروح الإخاء.');