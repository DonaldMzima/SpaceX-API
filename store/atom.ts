import { atom } from 'recoil'

const darkModeState = atom<string | undefined | null>({
  key: 'dark', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
})

export { darkModeState }
