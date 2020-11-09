import { parseCookies } from 'nookies'

import PageLayout from '@components/PageLayout'

import type { GetServerSideProps } from 'next'

type DiscoverPageProps = {
	isAuth: boolean
}

const DiscoverPage = ({ isAuth }: DiscoverPageProps) => {
	return (
		<PageLayout isAuth={isAuth} title='Discover'>
			<h1>Discover</h1>
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

export default DiscoverPage
