import { replaceAll } from "../util";

const convertWord = word =>
  replaceAll(word, [
    [/x/g, "ks"],
    [/ch/g, "x"],
    [/w/g, "v"],
    [/sz/g, "š"],
    [/cz/g, "č"],
    [/ż/g, "ž"],

    [/(?<=[tdr])(?=i)/g, "'"],

    [/l(?!i)/g, "lj"],
    [/łi/g, "l'i"],
    [/ł/g, "l"],
    [/rzy/g, "ri"],
    [/rz/g, "rj"],

    [/(?<=[sz])j/g, "'j"],
    [/ć|ci(?=[eaouęąó])/g, "tj"],
    [/ci/g, "ti"],
    [/dź|dzi(?=[eaouęąó])/g, "dj"],
    [/dzi/g, "di"],
    [/ś/g, "sj"],
    [/ź/g, "zj"],
    [/ń/g, "nj"],

    [/cji/g, "ci"],

    [/i(?=[eaouęąó])/g, "j"],
    [/i/g, "jy"],

    [/(?<=[sz])jr/g, "rj"],
    [/sjtj/g, "stj"],
    [/zjdj/g, "zdj"],

    [/^j(?=[ye])/g, ""],
    [/(?<![iyeaouęąó^])jy/g, "i"],
  ])

const capitalise = (s, locale) =>
  locale
    ? s[0].toLocaleUpperCase(locale) + s.substring(1)
    : s[0].toUpperCase() + s.substring(1)

const locale = 'PL';
export const convert = text =>
  text.replace(/[a-ząćęłńóśźż]+/ig, word => {
    const kase =
      word == word.toLocaleUpperCase(locale)
        ? 'upper'
        : word == capitalise(word, locale)
          ? 'cap'
          : 'lower'

    const wordNew = convertWord(word.toLocaleLowerCase());

    return kase == 'upper'
      ? wordNew.toLocaleUpperCase(locale)
      : kase == 'lower'
        ? wordNew.toLocaleLowerCase(locale)
        : capitalise(wordNew, locale)
  })
