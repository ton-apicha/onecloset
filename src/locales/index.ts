import { th } from './th'
import { en } from './en'
import { zh } from './zh'

export const locales = {
  th,
  en,
  zh,
}

export type LocaleKey = keyof typeof locales

export function getLocale(locale: string) {
  return locales[locale as LocaleKey] || locales.th
}

export { th, en, zh }
