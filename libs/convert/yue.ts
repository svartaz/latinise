import ToJyutping from "to-jyutping";
import { replaceAll } from "../util";

const convertJyutping = jyutping => {
  let [atone, toneStr] = jyutping.split(/(?<=[a-z]+)(?=[1-6])/);
  const isLow = ['4', '5', '6'].includes(toneStr)
  const tone =
    atone.match(/[ktp]$/)
      ? 3
      : (parseInt(toneStr) - 1) % 3

  atone = replaceAll(atone, [
    [/(?<=[aeiou])i/, 'j'],
    [/(?<=[aeiou])u/, 'w'],

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
    [/(?<=[kc][xh]?|[xh]|g|[td][xh]?|[nl]|[pb][xh]?|[fvm])ej/, 'i'],
    [/(?<=[kc][xh]?|[xh]|g|[td][xh]?|[nl]|[pb][xh]?|[fvm])ơj/, 'y'],
    [/(?<=w)ăj/, 'i'],

    [/ơ(?=[nt])/, 'o'],
  ])

  return atone
    .replace(/(?<=[iyueơăoa])/, ['', '\u0301', '\u0309', ''][tone])
    .replace(/(?<=^[gm])$/, ['', '\u0301', '\u0307', ''][tone])
    .normalize('NFKC')
}

export const convertText = (text: string) =>
  ToJyutping.getJyutpingList(text).map(([hans, jyutping]) =>
    jyutping === null
      ? { raw: hans }
      : { hans, latn: convertJyutping(jyutping) }
  )

console.log(convertText(""))