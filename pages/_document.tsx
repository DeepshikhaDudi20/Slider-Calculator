import Document, {Head, Html, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

// It can be used to set lang, load fonts, load scripts before page interactivity,
// collect style sheets for CSS in JS solutions like Styled Components

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App: any) => (props: any) =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
