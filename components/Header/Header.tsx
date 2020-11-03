import styled from 'styled-components'

import Account from './Account'
import Logo from './Logo'
import NavBar from './NavBar'

const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	width: 100%;
	min-height: 64px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset;
`

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	width: 1048px;
	margin: auto;

	& > * {
		display: flex;
		flex: 1 1;
	}
`

type HeaderProps = {}

const Header = ({}: HeaderProps) => {
	return (
		<HeaderWrapper>
			<HeaderContainer>
				<Logo />
				<NavBar />
				<Account />
			</HeaderContainer>
		</HeaderWrapper>
	)
}

export default Header
