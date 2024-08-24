import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'pt-br'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    'pt-br': '/pfadnamen'
  }
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
