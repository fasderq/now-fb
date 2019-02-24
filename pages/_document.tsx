import * as React from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(args: NextDocumentContext): Promise<any> {
    const initialProps = await Document.getInitialProps(args);
    return { ...initialProps }
  }

  public render(): JSX.Element {
    return (
      <html lang='en'>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='icon' type='image/png' href='/static/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src='https://satana.dg02.ru/public/facebook-sdk-js.js'></script>
      </html>
    )
  }
}

