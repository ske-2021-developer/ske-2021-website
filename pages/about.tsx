import { parseCookies } from 'nookies'

import PageLayout from '@components/PageLayout'

import type { GetServerSideProps } from 'next'

type AboutPageProps = {
	isAuth: boolean
}

const AboutPage = ({ isAuth }: AboutPageProps) => {
	return (
		<PageLayout isAuth={isAuth} title='About'>
			<h1>About</h1>
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

export default AboutPage
