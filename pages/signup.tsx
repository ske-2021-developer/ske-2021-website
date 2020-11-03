import PageLayout from '@components/PageLayout'
import GoogleAuth from '@components/Auth/GoogleAuth'

type SignUpPageProps = {}

const SignUpPage = ({}: SignUpPageProps) => {
	return (
		<PageLayout title='Sign Up'>
			<h1>Sign Up</h1>
			<GoogleAuth />
		</PageLayout>
	)
}

export default SignUpPage
