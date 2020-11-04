import { useEffect } from 'react'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import styled from 'styled-components'

import { useUser } from '@states/user-state'

import type { GetServerSideProps } from 'next'

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

type AccountProps = {
	isAuth: boolean
}

const Account = ({ isAuth }: AccountProps) => {
	const [user] = useUser()

	return (
		<AccountContainer>
			{isAuth ? (
				<Link href='/user'>
					<UserPhoto src={user.photoURL} alt='user-photo-url' />
				</Link>
			) : (
				<Link href='/signup'>
					<SignUpLink>Sign Up</SignUpLink>
				</Link>
			)}
		</AccountContainer>
	)
}

export default Account
