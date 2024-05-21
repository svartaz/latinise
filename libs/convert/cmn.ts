import pinyin from 'pinyin';
import { replaceAll } from '../util';
const Qieyun = require('qieyun');

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

const convertHans = (hans, pinyin) => {
  let [atone, tone] = splitTone(pinyin);

  atone = replaceAll(atone, [
    [/(?<=^[jqx])u/, 'ü'],
    [/^j/, 'g'],
    [/^q/, 'k'],
    [/^x/, 'h'],

    [/(?<=^[bpmf])o$/, 'uo'],

    [/^zh/, 'ž'],
    [/^ch/, 'ť'],
    [/^sh/, 'š'],
    [/^c/, 'q'],
    [/(?<=^[žťšrzqs])i/, 'ư'],

    [/^g/, 'c'],
    [/ng$/, 'g'],

    [/^yu/, 'ü'],
    [/^yi?/, 'i'],
    [/^wu?/, 'u'],

    [/ü/, 'y'],

    [/ao/, 'au'],
    [/iog/, 'yg'],
    [/og/, 'ug'],
    [/o/, 'e'],

    [/(?<=[iyu])e(?=[iugn])/, ''],
  ])

  const data = Qieyun.資料.query字頭(hans);
  if (0 < data.length) {
    if (data.every(it => it.音韻地位.母 == '疑'))
      atone = replaceAll(atone, [
        [/^(?=[iyuae])/, 'g'],
      ])
    else if (data.every(it => '精清從心邪'.includes(it.音韻地位.母))) {
      atone = replaceAll(atone, [
        [/^k(?=[iy])/, 'q'],
        [/^c(?=[iy])/, 'z'],
        [/^h(?=[iy])/, 's'],
      ])
    }

    if (data.every(it => it.音韻地位.聲 == '入' && '唐陽江登蒸庚耕庚清青東冬鍾'.includes(it.音韻地位.韻)))
      atone = replaceAll(atone, [
        [/(?<=[iyuea])$/, 'k'],
      ])
    else if (data.every(it => it.音韻地位.聲 == '入' && '寒桓刪山仙元先痕魂臻眞諄欣文'.includes(it.音韻地位.韻)))
      atone = replaceAll(atone, [
        [/(?<=[iyuea])$/, 't'],
      ])
    else if (data.every(it => it.音韻地位.聲 == '入' && '覃談咸銜鹽嚴凡添侵'.includes(it.音韻地位.韻)))
      atone = replaceAll(atone, [
        [/(?<=[iyuea])$/, 'p'],
      ])

    if (data.every(it => '覃談咸銜鹽嚴凡添侵'.includes(it.音韻地位.韻)))
      atone = replaceAll(atone, [
        [/n$/, 'm'],
      ])
  }

  return atone
    .replace(/(?<=[ưea])|(?<=[iuy])(?![iuyea])/, ["\u0304", "\u0301", "\u0309", "\u0300", ""][tone])
    .normalize("NFC");
}

export const convert = (text: string): [{ raw: string } | { hans: string, latns: [string] }] =>
  // @ts-ignore
  text
    .split(/(?<=\p{sc=Han})|(?=\p{sc=Han})/ug)
    .map(chunk =>
      chunk.match(/^\p{sc=Han}$/u)
        ? { hans: chunk, latns: pinyin(chunk, { heteronym: true, segment: "segmentit" })[0].map(it => convertHans(chunk, it)) }
        : { raw: chunk }
    )
