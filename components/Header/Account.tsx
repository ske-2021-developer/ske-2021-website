import { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { useUser } from '@states/user-state'

const AccountContainer = styled.div`
	padding-right: 2rem;
	justify-content: flex-end;
`

const SignUpLink = styled.a`
	background-color: ${({ theme: { colorPrimary } }) => colorPrimary};
	color: ${({ theme: { colorWhite } }) => colorWhite};
	cursor: pointer;
	border: 0.125rem solid ${({ theme: { colorPrimary } }) => colorPrimary};
	border-radius: 0.5rem;
	padding: 0.625rem 1rem;

	&:hover {
		background-color: ${({ theme: { colorWhite } }) => colorWhite};
		color: ${({ theme: { colorPrimary } }) => colorPrimary};
	}
`

const UserPhoto = styled.img`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	cursor: pointer;
`

type AccountProps = {}

const Account = ({}: AccountProps) => {
	const { user } = useUser()

	useEffect(() => {
		console.log(user)
	}, [user])

	return (
		<AccountContainer>
			{user === null ? (
				<Link href='/signup'>
					<SignUpLink>Sign Up</SignUpLink>
				</Link>
			) : (
				<Link href='/user'>
					<UserPhoto src={user.photoURL} alt='user-photo-url' />
				</Link>
			)}
		</AccountContainer>
	)
}

export default Account
