import { NextRouter, useRouter } from 'next/router'
import firebase from 'firebase/app'
import { parseCookies } from 'nookies'
import styled from 'styled-components'

import PageLayout from '@components/PageLayout'
import { verifyIdToken } from '@src/firebaseAdmin'
import { useUser } from '@states/user-state'

import type { GetServerSideProps } from 'next'

async function handleSignOut(router: NextRouter) {
	try {
		await firebase.auth().signOut()

		router.push('/signup')
	} catch (error) {
		console.error(error)
	}
}

const UserContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const UserPhoto = styled.img`
	width: 10rem;
	height: 10rem;
	border-radius: 50%;
`

const UserName = styled.h1`
	color: ${({ theme: { color } }) => color};
`

const UserEmail = styled.h3`
	color: ${({ theme: { colorMedium } }) => colorMedium};
`

const SignOutButton = styled.button``

type UserPageProps = {
	isAuth: boolean
}

const UserPage = ({ isAuth }: UserPageProps) => {
	const router = useRouter()

	const [user] = useUser()

	return (
		<PageLayout isAuth={isAuth} title='User'>
			{isAuth && user !== null && (
				<>
					<UserContainer>
						<UserPhoto src={user.photoURL} alt='user-photo-url' />
						<UserName>{user.displayName}</UserName>
						<UserEmail>{user.email}</UserEmail>
					</UserContainer>
					<SignOutButton onClick={() => handleSignOut(router)}>Sign Out</SignOutButton>
				</>
			)}
		</PageLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async context => {
	try {
		const { 'ske-auth-token': token } = parseCookies(context)
		await verifyIdToken(token)

		return {
			props: { isAuth: true }
		}
	} catch (error) {
		context.res.writeHead(302, { Location: '/signup' })
		context.res.end()

		return { props: { isAuth: false } }
	}
}

export default UserPage
