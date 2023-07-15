import { replaceAll } from "../util";

const convertWord = word =>
  replaceAll(word, [
    [/x/g, 'ks'],
    [/kh/g, 'x'],

    [/ng/g, 'ŋ'],
    [/c/g, 'ty'],
    [/g/g, 'c'],
    [/ŋ/g, 'g'],

    [/j/g, 'dj'],
    [/y/g, 'j'],
  ])

const capitalise = (s, locale) =>
  locale
    ? s[0].toLocaleUpperCase(locale) + s.substring(1)
    : s[0].toUpperCase() + s.substring(1)

const locale = 'ID';
export const convert = text =>
  text.replace(/[a-zéäëïöü]+/ig, word => {
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
