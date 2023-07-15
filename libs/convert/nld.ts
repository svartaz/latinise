import { replaceAll } from "../util";

const convertWord = word =>
  replaceAll(word, [
    [/^z/, 's'],
    [/^v/, 'f'],
    [/ch/g, 'x'],
    [/y|ij/g, 'ī'],
    [/aa/g, 'ā'],
    [/ee/g, 'ē'],
    [/éé/g, 'ḗ'],
    [/oo/g, 'ō'],
    [/uu/g, 'ū'],
  ])

const capitalise = (s, locale) =>
  locale
    ? s[0].toLocaleUpperCase(locale) + s.substring(1)
    : s[0].toUpperCase() + s.substring(1)

const locale = 'NL';
export const convert = text =>
  text.replace(/[a-z]+/ig, word => {
    const kase =
      word == word.toLocaleUpperCase(locale)
        ? 'upper'
        : word == capitalise(word, locale)
          ? 'cap'
          : 'lower'

    const wordNew = convertWord(word.toLocaleLowerCase(locale));

    return kase == 'upper'
      ? wordNew.toLocaleUpperCase(locale)
      : kase == 'lower'
        ? wordNew.toLocaleLowerCase(locale)
        : capitalise(wordNew, locale)
  })
