import Head from 'next/head'
import styled from 'styled-components'

import Header from './Header/Header'

import type { ReactNode } from 'react'

const PageMain = styled.main``

type PageLayoutProps = {
	children: ReactNode
	title: string
}

const PageLayout = ({ children, title }: PageLayoutProps) => {
	return (
		<>
			<Head>
				<title>{title} | Suankularb Exhibitions</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Header />
			<PageMain>{children}</PageMain>
		</>
	)
}

export default PageLayout
