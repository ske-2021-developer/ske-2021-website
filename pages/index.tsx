import { parseCookies } from 'nookies'

import PageLayout from '@components/PageLayout'

import type { GetServerSideProps } from 'next'

type HomePageProps = {
	isAuth: boolean
}

const HomePage = ({ isAuth }: HomePageProps) => {
	return (
		<PageLayout isAuth={isAuth} title='Home'>
			<h1>Home</h1>
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

export default HomePage
