import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const LogoContainer = styled.div`
	display: flex;
	flex: 1 1;
	padding-left: 2rem;
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
					<Image src='/images/logo.png' width={25} height={25} />
				</LogoCursor>
			</Link>
		</LogoContainer>
	)
}

export default Logo
