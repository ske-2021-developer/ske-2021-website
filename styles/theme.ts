import type { DefaultTheme } from 'styled-components'

interface CommonTheme {
	colorBlack: string
	colorWhite: string
	fontSize: string
}

const commonTheme: CommonTheme = {
	colorBlack: 'rgb(0, 0, 0)',
	colorWhite: 'rgb(255, 255, 255)',
	fontSize: '1rem'
}

const darkTheme: DefaultTheme & CommonTheme = {
	...commonTheme,
	backgroundColor: 'rgb(0, 0, 0)',
	color: 'rgb(255, 255, 255)',
	colorPrimary: 'rgb(55, 158, 255)',
	colorMedium: 'rgb(136, 136, 136)'
}

const lightTheme: DefaultTheme & CommonTheme = {
	...commonTheme,
	backgroundColor: 'rgb(255, 255, 255)',
	color: 'rgb(0, 0, 0)',
	colorPrimary: 'rgb(55, 158, 255)',
	colorMedium: 'rgb(102, 102, 102)'
}

export { darkTheme, lightTheme }
