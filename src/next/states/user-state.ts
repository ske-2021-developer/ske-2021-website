import { atom, useRecoilState } from 'recoil'

interface User {
	uid: string
	displayName: string
	email: string
	photoURL: string
	ticketId: string
}

const isGettingUserAtom = atom<boolean>({
	key: 'isGettingUserAtom',
	default: true
})

const userAtom = atom<User | null>({
	key: 'userAtom',
	default: null
})

function useIsGettingUser() {
	const [get, set] = useRecoilState(isGettingUserAtom)

	return [get, set] as const
}

function useUser() {
	const [get, set] = useRecoilState(userAtom)

	return [get, set] as const
}

export { useIsGettingUser, useUser }
