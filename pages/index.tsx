import { parseCookies } from 'nookies'
import styled from 'styled-components'

import PageLayout from '@components/PageLayout'

import type { GetServerSideProps } from 'next'

const HeroSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40rem;
`

const HeroTextContainer = styled.div`
	display: flex;
	flex: 0 1 40%;
`

const HeroText = styled.span`
	color: ${({ theme: { color } }) => color};
	text-align: left;
	font-size: 4rem;
`

const HeroImageContainer = styled.div`
	display: flex;
	flex: 0 1 40%;
`

const HighlightText = styled.span`
	color: ${({ theme: { colorPrimary } }) => colorPrimary};
`

type HomePageProps = {
	isAuth: boolean
}

const HomePage = ({ isAuth }: HomePageProps) => {
	return (
		<PageLayout isAuth={isAuth} title='Home'>
			<HeroSection>
				<HeroTextContainer>
					<HeroText>
						Welcome to <br />
						<HighlightText>Suankularb Exhibitions</HighlightText>
					</HeroText>
				</HeroTextContainer>
				<HeroImageContainer></HeroImageContainer>
			</HeroSection>
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
