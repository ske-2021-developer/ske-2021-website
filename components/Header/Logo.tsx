import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const LogoContainer = styled.div`
	padding-left: 2rem;
	justify-content: flex-start;
`

const LogoCursor = styled.div`
	cursor: pointer;
`

type LogoProps = {}

const Logo = ({}: LogoProps) => {
	return (
		<LogoContainer>
			<Link href='/'>
				<LogoCursor>
					<Image src='/images/logo.png' width={28} height={28} />
				</LogoCursor>
			</Link>
		</LogoContainer>
	)
}

export default Logo
