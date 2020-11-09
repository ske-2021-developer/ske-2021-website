import { parseCookies } from 'nookies'

import PageLayout from '@components/PageLayout'

import type { GetServerSideProps } from 'next'

type ContactPageProps = {
	isAuth: boolean
}

const ContactPage = ({ isAuth }: ContactPageProps) => {
	return (
		<PageLayout isAuth={isAuth} title='Contact'>
			<h1>Contact</h1>
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

export default ContactPage
