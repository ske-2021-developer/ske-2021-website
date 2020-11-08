import admin from 'firebase-admin'

const verifyIdToken = (token: string) => {
	if (admin.apps.length === 0) {
		admin.initializeApp({
			credential: admin.credential.cert({
				clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
				privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
				projectId: process.env.FIREBASE_ADMIN_PROJECT_ID
			}),
			databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
		})
	}

	return admin
		.auth()
		.verifyIdToken(token)
		.catch(error => {
			throw error
		})
}

export { verifyIdToken }
