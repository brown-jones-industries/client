import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import stylesheet from 'styles/index.scss'

export default class MyDocument extends Document {
  render () {
    return (
      <html lang={'en-US'} >
        <Head>
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui'
          />
          <link rel='manifest' href='static/manifest.json' />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

          <title>Todo App</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
