import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string,
    bodySecondary: string,
    text: string,
    textParagraph: string,
    textSecondary: string,
  }
}