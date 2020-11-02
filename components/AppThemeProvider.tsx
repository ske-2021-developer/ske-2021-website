import { ThemeProvider } from 'styled-components'

import { useTheme } from '@states/theme-state'

import type { ReactNode } from 'react'

type AppThemeProviderProps = {
	children: ReactNode
}

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
	const { theme } = useTheme()

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppThemeProvider
