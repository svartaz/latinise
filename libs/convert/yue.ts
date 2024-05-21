import ToJyutping from "to-jyutping";
import { replaceAll } from "../util";
const Qieyun = require('qieyun');

const convertJyutping = (hans, jyutping) => {
  let [atone, toneStr]: [string, string] = jyutping.split(/(?<=[a-z]+)(?=[1-6])/);
  const isLow: boolean = ['4', '5', '6'].includes(toneStr)
  const tone: number =
    atone.match(/[ktp]$/)
      ? 3
      : (parseInt(toneStr) - 1) % 3

  atone = replaceAll(atone, [
    [/(?<=[aeiou])i$/, 'j'],
    [/(?<=[aeiou])u$/, 'w'],

    [/aa/, 'ā'],
    [/a/, 'ă'],
    [/ā/, 'a'],
    [/oe|eo/, 'ơ'],
    [/yu/, 'y'],

    [/j(?=[iyơ])/, ''],
    [/w(?=u)/, ''],

    [/^k/, 'kx'],
    [/^c/, 'ţx'],
    [/^t/, 'tx'],
    [/^p/, 'px'],

    [/^g/, 'k'],
    [/^z/, 'ţ'],
    [/^d/, 't'],
    [/^b/, 'p'],

    [/ng/g, 'g'],
    [/^h/, 'x'],
  ])

  if (isLow)
    atone = replaceAll(atone, [
      [/^k/, 'c'],
      [/^ţ/, 'ḑ'],
      [/^t/, 'd'],
      [/^p/, 'b'],

      [/^x/, 'h'],
      [/^s/, 'z'],
      [/^f/, 'v'],
    ]);
  else
    atone = replaceAll(atone, [
      [/^(?=[gnmjlwiyueơăoa])/, 'q'],
    ]);

  if (tone < 2)
    atone = replaceAll(atone, [
      [/(?<=^[cḑdb])(?!x)/, 'h'],
      [/(?<=^[cḑdb])x/, ''],
    ])

  atone = replaceAll(atone, [
    //[/(?<![kc][xh])ow/, 'u'],
    [/ej/, 'i'],
    [/(?<=w)ăj/, 'i'],

    [/(?<=^q?)ơ(?=[nt])/, 'jo'],
    [/ơ(?=[nt])/, 'o'],
  ])

  const data = Qieyun.資料.query字頭(hans);
  if (1 <= data.length) {
    if (data.every(it => '模虞魚'.includes(it.音韻地位.韻)))
      atone = atone.replaceAll(/(?<=[pb][xh]?|m)ow$/, 'u');

    if (data.every(it => '虞魚'.includes(it.音韻地位.韻)))
      atone = atone.replace(/ơj$/, 'y');

    if (data.every(it => '灰'.includes(it.音韻地位.韻)))
      atone = atone.replace(/(?<=[tdţḑ][xh]?|[szl])ơj$/, 'uj');

    if (data.every(it => '覃談'.includes(it.音韻地位.韻)))
      atone = atone.replace(/ă(?=[mp]$)/, 'o');

    if (data.every(it => it.音韻地位.母 == '疑'))
      atone = atone.replace(/(?<=^q?)(?=[jwiyueơăoa])/, 'g');

    else if (data.every(it => '云匣'.includes(it.音韻地位.母)))
      atone = atone.replace(/^(?=[jwiyueơăoa])/, 'h');

    else if (data.every(it => '日娘'.includes(it.音韻地位.母)))
      atone = replaceAll(atone, [
        [/(?<=^q?)(?=j)/, 'n'],
        [/(?<=^q?)(?=[iyeơ])/, 'nj'],
      ]);

    else if (data.every(it => '知徹澄莊初崇生俟章昌常書船'.includes(it.音韻地位.母)))
      atone = replaceAll(atone, [
        [/^ţ(x?)(?=[iyueơăoa])/, 't$1j'],
        [/^ḑ([xh]?)(?=[iyueơăoa])/, 'd$1j'],
        [/(?<=^[sz])(?=[iyueơăoa])/, 'j'],
      ]);

    else if (data.every(it => '見溪群曉匣云'.includes(it.音韻地位.母)))
      atone = replaceAll(atone, [
        [/^f/, 'xw'],
        [/^v/, 'hw'],
      ]);
  }

  return replaceAll(atone, [
    [/^kx/, 'ꝁ'],
    [/^ţx/, 'ṯ'],
    [/^tx/, 'ŧ'],
    [/^px/, 'ꝑ'],
    //[/$/, ['', 'q', 's', ''][tone]],
    [/(?<=[iyueơăoa])/, ['', '\u0301', '\u0309', ''][tone]],
    [/(?<=^[gm])$/, ['', '\u0301', '\u0309', ''][tone]],
  ])
    .normalize('NFKC');
}

export const convert = (text: string) =>
  ToJyutping.getJyutpingList(text).map(([hans, jyutping]) =>
    jyutping === null
      ? { raw: hans }
      : { hans, latn: convertJyutping(hans, jyutping) }
  )
