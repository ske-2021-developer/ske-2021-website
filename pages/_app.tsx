import { RecoilRoot } from 'recoil'

import AppRoot from '@components/AppRoot'
import GlobalStyle from '@styles/globals'

import '@styles/globalStyle.css'

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<AppRoot>
				<GlobalStyle />
				<Component {...pageProps} />
			</AppRoot>
		</RecoilRoot>
	)
}

export default MyApp
