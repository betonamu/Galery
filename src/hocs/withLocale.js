import React from 'react';
import { LocaleProvider } from '../contexts/LocaleContext';
import { isLocale } from '../utils/locale';

const WithLocaleHocs = (WrappedPage) => {
  const WithLocale = ({ locale, ...pageProps }) => {
    // if (!locale) {
    //   return <Error statusCode={404} />
    // }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    )
  }

  WithLocale.getInitialProps = async ctx => {
    let pageProps = {};
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }
    if (typeof ctx.query?.lang !== 'string' || !isLocale(ctx.query.lang)) {
      return { ...pageProps, locale: undefined };
    }
    return { ...pageProps, locale: ctx.query.lang };
  }

  return WithLocale;
}

export default WithLocaleHocs;
