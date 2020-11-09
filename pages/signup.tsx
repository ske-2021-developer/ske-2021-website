import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'

import PageLayout from '@components/PageLayout'
import GoogleAuth from '@components/Auth/GoogleAuth'
import { useIsGettingUser, useUser } from '@states/user-state'

import { GetServerSideProps } from 'next'

type SignUpPageProps = {
	isAuth: boolean
}

const SignUpPage = ({ isAuth }: SignUpPageProps) => {
	const router = useRouter()

	const [isGettingUser] = useIsGettingUser()
	const [user] = useUser()

	useEffect(() => {
		if (user !== null) {
			router.push('/user')
		}
	}, [user])

	return (
		<PageLayout isAuth={isAuth} title='Sign Up'>
			{!isGettingUser && user === null && (
				<>
					<h1>Sign Up</h1>
					<GoogleAuth />
				</>
			)}
		</PageLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async context => {
	const { 'ske-auth-token': token } = parseCookies(context)
	const isAuth = !!token

	return {
		props: { isAuth }
	}
}

export default SignUpPage
