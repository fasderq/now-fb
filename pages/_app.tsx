import React from 'react';
import App, { Container } from 'next/app';

export default class MyApp extends App {
  static async getInitialProps(props: any): Promise<any> {
    const { Component, ctx } = props;

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public render(): JSX.Element {
    const { props } = this as any
    const { Component, pageProps } = props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
