import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

interface NavData {
	path: string
	title: string
}

interface NavBarLinkProps {
	isActive: boolean
}

const NavBarContainer = styled.nav`
	display: flex;
	flex: 1 1;
`

const LinkContainer = styled.div`
	margin-left: 12px;

	&:first-child {
		margin-left: 0;
	}
`

const NavBarLink = styled.a<NavBarLinkProps>`
	color: ${({ isActive, theme: { colorMedium, colorPrimary } }) => (isActive ? colorPrimary : colorMedium)};
	cursor: pointer;

	&:hover {
		color: ${({ isActive, theme: { color, colorPrimary } }) => (isActive ? colorPrimary : color)};
	}
`

type NavBarProps = {}

const NavBar = ({}: NavBarProps) => {
	const navDatas: NavData[] = [
		{
			path: '/discover',
			title: 'Discover'
		},
		{
			path: '/about',
			title: 'About'
		},
		{
			path: '/contact',
			title: 'Contact'
		}
	]

	const router = useRouter()

	return (
		<NavBarContainer>
			{navDatas.map(({ path, title }) => (
				<LinkContainer key={path}>
					<Link href={path}>
						<NavBarLink isActive={router.pathname === path}>{title}</NavBarLink>
					</Link>
				</LinkContainer>
			))}
		</NavBarContainer>
	)
}

export default NavBar
