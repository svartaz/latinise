import pinyin from 'pinyin';
import { replaceAll, zip } from '../util';

const splitTone = (pinyin: string): [string, number] => {
  pinyin = pinyin.normalize('NFD');

  let tone = 4;
  // @ts-ignore
  for (const [i, c] of ['\u0304', '\u0301', '\u030C', '\u0300'].entries())
    if (pinyin.includes(c)) {
      pinyin = pinyin.replace(c, '')
      tone = i;
      break;
    }

  return [pinyin.normalize('NFC'), tone];
}

const convertAtone = (atone: string) =>
  replaceAll(atone, [
    [/(?<=^[jqx])u/, 'ü'],
    [/^j/, 'g'],
    [/^q/, 'k'],
    [/^h/, 'x'],

    [/(?<=^[bpmf])o$/, 'uo'],

    [/^zh/, 'ď'],
    [/^ch/, 'ť'],
    [/^sh/, 'š'],
    [/^c/, 'ţ'],
    [/(?<=^[ďťšrzţs])i/, 'ư'],

    [/^g/, 'c'],
    [/ng$/, 'g'],

    [/^yi/, 'i'],
    [/^wu/, 'u'],
    [/^yu/, 'ü'],
    [/^y/, 'i'],
    [/^w/, 'u'],

    [/ü/, 'y'],

    [/ao/, 'au'],
    [/iog/, 'yg'],
    [/og/, 'ug'],
    [/o/, 'e'],
    [/(?<=[iyu])e(?=[iugn])/, ''],
  ])

const convertPinyin = (pinyin: string): string => {
  const [atone, tone] = splitTone(pinyin);
  return convertAtone(atone)
    .replace(/(?<=[ưea])|(?<=[iuy])(?![iuyea])/, ["\u0304", "\u0301", "\u0309", "\u0300", ""][tone])
    .normalize("NFC")
};

export const convertText = (text: string): [{ raw: string } | { hans: string, latns: [string] }] =>
  // @ts-ignore
  text
    .split(/(?<=\p{sc=Han})|(?=\p{sc=Han})/ug)
    .map(chunk =>
      chunk.match(/^\p{sc=Han}$/u)
        ? { hans: chunk, latns: pinyin(chunk, { heteronym: true, segment: "segmentit" })[0].map(convertPinyin) }
        : { raw: chunk }
    )
