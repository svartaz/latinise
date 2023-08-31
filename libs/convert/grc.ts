import { replaceAll } from "../util";

const convertWord = word =>
  replaceAll(word, [
    [/β/g, "b"],
    [/γγ/g, "nc"],
    [/γκ/g, "nk"],
    [/γ/g, "c"],
    [/δ/g, "d"],
    [/ζ/g, "z"],
    [/η/g, "ē"],
    [/θ/g, "y"],
    [/κ/g, "k"],
    [/λ/g, "l"],
    [/μ/g, "m"],
    [/ν/g, "n"],
    [/π/g, "p"],
    [/ϙ/g, "q"],
    [/[ρῤῥ]/g, "r"],
    [/ξ/g, "ks"],
    [/[σς]/g, "s"],
    [/τ/g, "t"],
    [/φ/g, "f"],
    [/χ/g, "x"],
    [/ψ/g, "ps"],
    [/ω/g, "ō"],

    [/[αἀᾰ]/g, "a"],
    [/ἁ/g, "ha"],
    [/[ἂὰ]/g, "à"],
    [/ἃ/g, "hà"],
    [/[άἄά]/g, "á"],
    [/ἅ/g, "há"],
    [/ἆ/g, "â"],
    [/ἇ/g, "hâ"],

    [/ᾱ/g, "ā"],
    [/ᾶ/g, "â"],
    [/[ᾀᾳ]/g, "āi"],
    [/ᾁ/g, "hāi"],
    [/[ᾂᾲ]/g, "ā\u0300i"],
    [/ᾃ/g, "hā\u0300i"],
    [/[ᾄᾴ]/g, "ā\u0301i"],
    [/ᾅ/g, "hā\u0301i"],
    [/[ᾆᾷ]/g, "âi"],
    [/ᾇ/g, "hâi"],

    [/[εἐ]/g, "e"],
    [/ἑ/g, "he"],
    [/[ἒὲ]/g, "è"],
    [/ἓ/g, "hè"],
    [/[έἔέ]/g, "é"],
    [/ἕ/g, "hé"],

    [/ἠ/g, "ē"],
    [/ἡ/g, "hē"],
    [/[ἢὴ]/g, "ḕ"],
    [/ἣ/g, "hḕ"],
    [/[ήἤή]/g, "ḗ"],
    [/ἦ/g, "hê"],
    [/ἧ/g, "hê"],

    [/ῆ/g, "ê"],
    [/[ᾐῃ]/g, "ēi"],
    [/ᾑ/g, "hēi"],
    [/[ᾒῂ]/g, "ḕi"],
    [/ᾓ/g, "hḕi"],
    [/[ᾔῄ]/g, "ḗi"],
    [/ᾕ/g, "hḗi"],
    [/[ᾖῇ]/g, "êi"],
    [/ᾗ/g, "hêi"],

    [/[ιἰῐ]/g, "i"],
    [/ῑ/g, "ī"],
    [/ἱ/g, "hi"],
    [/[ἲὶ]/g, "ì"],
    [/ἳ/g, "hì"],
    [/[ίἴί]/g, "í"],
    [/ἵ/g, "hí"],
    [/[ἶῖ]/g, "î"],
    [/ἷ/g, "hî"],

    [/ῒ/g, "'ì"],
    [/ΐ/g, "'í"],
    [/ῗ/g, "'î"],

    [/[οὀ]/g, "o"],
    [/ὁ/g, "ho"],
    [/[ὂὸ]/g, "ò"],
    [/ὃ/g, "hò"],
    [/[όὄό]/g, "ó"],
    [/ὅ/g, "hó"],

    [/[υὐῠ]/g, "u"],
    [/ῡ/g, "ū"],
    [/ὑ/g, "hu"],
    [/[ὒὺ]/g, "ù"],
    [/ὓ/g, "hù"],
    [/[ύὔύ]/g, "ú"],
    [/ὕ/g, "hú"],
    [/[ὖῦ]/g, "û"],
    [/ὗ/g, "hû"],

    [/ῢ/g, "'ù"],
    [/ΰ/g, "'ú"],
    [/ῧ/g, "'û"],

    [/ὠ/g, "ō"],
    [/ὡ/g, "hō"],
    [/[ὢὼ]/g, "ṑ"],
    [/ὣ/g, "hṑ"],
    [/[ώὤώ]/g, "ṓ"],
    [/ὣ/g, "hṓ"],
    [/[ὦῶ]/g, "ô"],
    [/ὧ/g, "hô"],

    [/[ᾠῳ]/g, "ōi"],
    [/ᾡ/g, "hōi"],
    [/[ᾢῲ]/g, "ṑi"],
    [/ᾣ/g, "hṑi"],
    [/[ᾤῴ]/g, "ṓi"],
    [/ᾥ/g, "hṓi"],
    [/[ᾦῷ]/g, "ôi"],
    [/ᾧ/g, "hôi"],

    [/aî/g, "áì"],
    [/eî/g, "éì"],
    [/oî/g, "óì"],
    [/uî/g, "úì"],

    [/aû/g, "áù"],
    [/éù/g, "áù"],
    [/oû/g, "óù"],
    [/éû/g, "ḗù"],

    [/([aeou])h([iìí])/g, "h$1$2"],
    [/([aeoē])h([uùú])/g, "h$1$2"],
  ])

const capitalise = (s, locale) =>
  locale
    ? s[0].toLocaleUpperCase(locale) + s.substring(1)
    : s[0].toUpperCase() + s.substring(1)

const locale = 'el';
export const convert = text =>
  text.replace(/\p{sc=Greek}+/gu, word => {
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
