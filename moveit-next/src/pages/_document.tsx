import Document,
{
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps
} from 'next/document';


interface MyDocumentProps extends DocumentProps {
  isDark: boolean;
}

export default class MyDocument extends Document<MyDocumentProps> {
  render() {
    return (
      <Html className={this.props.isDark ? 'dark-mode' : ''}>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
