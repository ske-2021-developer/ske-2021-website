import { atom, useRecoilState } from 'recoil'

interface User {
	uid: string
	displayName: string
	email: string
	photoURL: string
	ticketId: string
}

const userAtom = atom<User | null>({
	key: 'userUidAtom',
	default: null
})

function useUser() {
	const [user, setUser] = useRecoilState(userAtom)

	return { user, setUser }
}

export { useUser }
