export const replaceAll = (s: string, map: Array<any>) =>
  map.reduce((acc, [x, y]) => acc.replace(x, y), s)

export const zip = <A, B>(as: Array<A>, bs: Array<B>): Array<[A, B]> =>
  as.map((a, i) => [a, bs[i]]);


type Case = 'upper' | 'cap' | 'lower';

export const capitalise = (locale: string, word: string) =>
  word
    ? word[0].toLocaleUpperCase(locale) + word.substring(1)
    : word[0].toUpperCase() + word.substring(1)

export const kase = (word, locale) =>
  word == word.toLocaleUpperCase(locale)
    ? 'upper'
    : word == capitalise(locale, word)
      ? 'cap'
      : 'lower';

export const applyCase = (word: string, locale: string, kase: Case) => {
  switch (kase) {
    case 'upper':
      return word.toLocaleUpperCase(locale);
    case 'lower':
      return word.toLocaleLowerCase(locale);
    case 'cap':
      return capitalise(locale, word);
  }
}

export const convertText = (locale: string, re: RegExp, convertWord: Function, keepsCase = false) =>
  text =>
    text.replace(re, w => {
      const wNew = convertWord(w.toLocaleLowerCase());
      if (keepsCase)
        return applyCase(wNew, locale, kase(w, locale))
      else
        return wNew
    })