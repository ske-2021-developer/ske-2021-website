import { parseCookies } from 'nookies'

import PageLayout from '@components/PageLayout'
import GoogleAuth from '@components/Auth/GoogleAuth'

import type { GetServerSideProps } from 'next'

type SignUpPageProps = {
	isAuth: boolean
}

const SignUpPage = ({ isAuth }: SignUpPageProps) => {
	return (
		<PageLayout isAuth={isAuth} title='Sign Up'>
			<h1>Sign Up</h1>
			<GoogleAuth />
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
