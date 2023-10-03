import React, { useState } from "react"
import { convertText } from "./util"

export const BasicConverter = (title: string, lang: string, re: RegExp, convertWord: Function, keepsCase: boolean, valueInitial: string) => {
  const [value, setValue] = useState(valueInitial)
  const convert = convertText(lang, re, convertWord, keepsCase)

  return <>
    <h2>{title}</h2>
    <textarea lang={lang} value={value} onChange={event => setValue(event.target.value)}></textarea>
    <div lang={lang} className='output'>
      {convert(value)}
    </div>
  </>
}

