import { atom, useRecoilState } from 'recoil'

import { lightTheme } from '@styles/theme'

import type { DefaultTheme } from 'styled-components'

const themeAtom = atom<DefaultTheme>({
	key: 'themeAtom',
	default: lightTheme
})

function useTheme() {
	const [theme, setTheme] = useRecoilState(themeAtom)

	return { theme, setTheme }
}

export { useTheme }
