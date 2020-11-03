import firebase from 'firebase/app'
import 'firebase/auth'
import styled from 'styled-components'

import PageLayout from '@components/PageLayout'

async function handleSignOut() {
	try {
		await firebase.auth().signOut()

		console.log('success')
	} catch (error) {
		console.error(error)
	}
}

const SignOutButton = styled.button``

type UserPageProps = {}

const UserPage = ({}: UserPageProps) => {
	return (
		<PageLayout title='User'>
			<SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
		</PageLayout>
	)
}

export default UserPage
