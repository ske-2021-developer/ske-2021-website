import { ReactNode, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { setCookie } from 'nookies'
import { ThemeProvider } from 'styled-components'

import firebaseClient from '@src/firebaseClient'
import { getUserData } from '@src/firebaseFirestore'
import { useTheme } from '@states/theme-state'
import { useIsGettingUser, useUser } from '@states/user-state'

const cookieConfig = {
	maxAge: 30 * 24 * 60 * 60
}

type AppRootProps = {
	children: ReactNode
}

const AppRoot = ({ children }: AppRootProps) => {
	const [, setIsGettingUser] = useIsGettingUser()
	const { theme } = useTheme()
	const [, setUser] = useUser()

	useEffect(() => {
		setIsGettingUser(true)

		firebase.auth().onIdTokenChanged(async user => {
			if (user === null) {
				setUser(null)

				setCookie(undefined, 'ske-auth-token', '', cookieConfig)
			} else {
				const { displayName, email, photoURL, uid } = user

				// const userData = await getUserData(uid)
				// console.log(userData)

				const token = await user.getIdToken()

				const ticketId = ''

				setUser({
					uid,
					displayName,
					email,
					photoURL,
					ticketId
				})

				setCookie(undefined, 'ske-auth-token', token, cookieConfig)
			}

			setIsGettingUser(false)
		})
	}, [])

	firebaseClient()

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppRoot
