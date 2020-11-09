import firebase from 'firebase/app'
import 'firebase/firestore'

async function getUserData(uid: string) {
	const db = firebase.firestore()
	const usersCollection = db.collection('users').doc(uid)

	const userData = await usersCollection.get()

	return userData
}

export { getUserData }
