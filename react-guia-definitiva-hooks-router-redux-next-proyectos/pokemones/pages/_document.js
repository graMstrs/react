import Document from "next/document";
import { ServerStyledSheet } from 'styled-components'

export default class MyDocument extends Document{
  static async getInitialProps(ctx){
    const sheet = new ServerStyledSheet()
    const originalRenderPage = ctx.renderPage 

    try {
      ctx.renderPage = () =>
        originalRenderPage ({
          enhanceApp: App => props => 
            sheet.collectStyles( < App {...props} /> )
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
}