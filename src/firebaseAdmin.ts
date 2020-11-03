import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from 'firebase-admin-service-account.json'

const verifyIdToken = (token: string) => {
	if (admin.apps.length === 0) {
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount as ServiceAccount),
			databaseURL: process.env.FIREBASE_DATABASE_URL
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
