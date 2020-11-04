import { useEffect, useState } from 'react'
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

type AccountProps = {
	isAuth: boolean
}

const Account = ({ isAuth }: AccountProps) => {
	// const [isUserTimeout, setIsUserTimeout] = useState<number>(null)

	const [user] = useUser()

	// useEffect(() => {
	// 	if (user === null) {
	// 		if (isUserTimeout === null) {
	// 			const timeout = window.setTimeout(() => {

	// 			}, [])

	// 			setIsUserTimeout(timeout)
	// 		} else {

	// 		}
	// 	} else {

	// 	}
	// }, [user])

	return (
		<AccountContainer>
			{isAuth && user !== null ? (
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
