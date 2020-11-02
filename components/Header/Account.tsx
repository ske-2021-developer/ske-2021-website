import Link from 'next/link'
import styled from 'styled-components'

const AccountContainer = styled.div``

const SignUpButton = styled.button`
	border: none;
	color: ${({ theme: { colorPrimary } }) => colorPrimary};

	&:hover {
		color: ${({ theme: { color } }) => color};
	}
`

type AccountProps = {}

const Account = ({}: AccountProps) => {
	return (
		<AccountContainer>
			<Link href='/signup'>
				<SignUpButton>Sign Up</SignUpButton>
			</Link>
		</AccountContainer>
	)
}

export default Account
