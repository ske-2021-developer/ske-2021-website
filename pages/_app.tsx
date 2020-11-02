import { RecoilRoot } from 'recoil'

import AppThemeProvider from '@components/AppThemeProvider'
import GlobalStyle from '@styles/globals'

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<AppThemeProvider>
				<GlobalStyle />
				<Component {...pageProps} />
			</AppThemeProvider>
		</RecoilRoot>
	)
}

export default MyApp
