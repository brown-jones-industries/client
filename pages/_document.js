import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang={'en-US'} >
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
          />
          <link rel="manifest" href="static/manifest.json" />
          <link rel="stylesheet" href="static/bulma.css" />
          <link rel="stylesheet" href="static/styles.css" />


          <title>Todo App</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
