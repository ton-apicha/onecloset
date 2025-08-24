export const i18nConfig = {
  defaultLocale: 'th',
  locales: ['th', 'en', 'zh'],
  localeNames: {
    th: 'ไทย',
    en: 'English',
    zh: '中文',
  },
}

export type Locale = keyof typeof i18nConfig.localeNames

export function getLocaleName(locale: string): string {
  return i18nConfig.localeNames[locale as Locale] || locale
}

export function isValidLocale(locale: string): locale is Locale {
  return i18nConfig.locales.includes(locale as Locale)
}
