import { useRouter, NextRouter } from 'next/router'
import { useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'

const uiConfig: (router: NextRouter) => firebaseui.auth.Config = router => ({
	signInFlow: 'popup',
	signInOptions: [
		{
			provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			scopes: ['https://www.googleapis.com/auth/contacts.readonly'],
			customParameters: {
				prompt: 'select_account'
			}
		}
	],
	callbacks: {
		signInSuccessWithAuthResult() {
			console.log('success 1')

			router.push('/user')

			console.log('success 2')

			return true
		}
	}
})

type GoogleAuthProps = {}

const GoogleAuth = ({}: GoogleAuthProps) => {
	const router = useRouter()

	useEffect(() => {
		router.prefetch('/user')

		firebase.auth().useDeviceLanguage()
	}, [])

	return <StyledFirebaseAuth uiConfig={uiConfig(router)} firebaseAuth={firebase.auth()} />
}

export default GoogleAuth
