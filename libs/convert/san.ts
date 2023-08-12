import { replaceAll } from "../util";

const convertWord = word =>
  replaceAll(word, [
    [/क/g, 'q<CON>'],
    [/ख/g, 'ꝗ<CON>'],
    [/ग/g, 'c<CON>'],
    [/घ/g, 'ꞓ<CON>'],
    [/ङ/g, 'g<CON>'],
    [/ह/g, 'h<CON>'],

    [/च/g, 'k<CON>'],
    [/छ/g, 'ꝁ<CON>'],
    [/ज/g, 'j<CON>'],
    [/झ/g, 'ɉ<CON>'],
    [/ञ/g, 'n<CON>'],
    [/य/g, 'y<CON>'],
    [/श/g, 'ẋ<CON>'],

    [/ट/g, 'ṭ<CON>'],
    [/ठ/g, 'ṯ<CON>'],
    [/ड/g, 'ḍ<CON>'],
    [/ढ/g, 'ḏ<CON>'],
    [/ण/g, 'ṇ<CON>'],
    [/र/g, 'r<CON>'],
    [/ष/g, 'ṣ<CON>'],

    [/त/g, 't<CON>'],
    [/थ/g, 'ŧ<CON>'],
    [/द/g, 'd<CON>'],
    [/ध/g, 'đ<CON>'],
    [/न/g, 'n<CON>'],
    [/ल/g, 'l<CON>'],
    [/स/g, 's<CON>'],

    [/प/g, 'p<CON>'],
    [/फ/g, 'ꝑ<CON>'],
    [/ब/g, 'b<CON>'],
    [/भ/g, 'ƀ<CON>'],
    [/म/g, 'm<CON>'],
    [/व/g, 'v<CON>'],

    [/अ/g, 'a'],
    [/इ/g, 'i'],
    [/उ/g, 'u'],
    [/ऋ/g, 'r'],
    [/ऌ/g, 'l'],
    [/ए/g, 'ai'],
    [/ओ/g, 'au'],

    [/आ/g, 'ā'],
    [/ई/g, 'ī'],
    [/ऊ/g, 'ū'],
    [/ॠ/g, 'ṝ'],
    [/ॡ/g, 'ḹ'],
    [/ऐ/g, 'āi'],
    [/औ/g, 'āu'],

    [new RegExp('क्'.replace('क', ''), 'g'), '<VOW>'],
    [new RegExp('कि'.replace('क', ''), 'g'), '<VOW>i'],
    [new RegExp('कु'.replace('क', ''), 'g'), '<VOW>u'],
    [new RegExp('कृ'.replace('क', ''), 'g'), '<VOW>r'],
    [new RegExp('कॢ'.replace('क', ''), 'g'), '<VOW>l'],
    [new RegExp('के'.replace('क', ''), 'g'), '<VOW>ai'],
    [new RegExp('को'.replace('क', ''), 'g'), '<VOW>au'],

    [new RegExp('का'.replace('क', ''), 'g'), '<VOW>ā'],
    [new RegExp('की'.replace('क', ''), 'g'), '<VOW>ī'],
    [new RegExp('कू'.replace('क', ''), 'g'), '<VOW>ū'],
    [new RegExp('कॄ'.replace('क', ''), 'g'), '<VOW>ṝ'],
    [new RegExp('कॣ'.replace('क', ''), 'g'), '<VOW>ḹ'],
    [new RegExp('कै'.replace('क', ''), 'g'), '<VOW>āi'],
    [new RegExp('कौ'.replace('क', ''), 'g'), '<VOW>āu'],

    [new RegExp('कं'.replace('क', ''), 'g'), 'm'],
    [new RegExp('कः'.replace('क', ''), 'g'), 's'],

    [/<CON><VOW>/g, ''],
    [/<CON>/g, 'a'],


    [/ऽ/g, '\''],
    [/।/g, '.'],
  ]);

export const convert = text =>
  text.replace(/(\p{sc=Devanagari}|।|ऽ)+/ug, convertWord);
