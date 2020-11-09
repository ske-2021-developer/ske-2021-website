import { useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'

const uiConfig = {
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
			return false
		}
	}
}

type GoogleAuthProps = {}

const GoogleAuth = ({}: GoogleAuthProps) => {
	useEffect(() => {
		firebase.auth().useDeviceLanguage()
	}, [])

	return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
}

export default GoogleAuth
