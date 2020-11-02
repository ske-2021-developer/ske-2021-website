import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		backgroundColor: string
		color: string
		colorPrimary: string
		colorMedium: string
	}
}
