import { customAlphabet, urlAlphabet } from 'nanoid'

export const uid = () => {
  return customAlphabet(urlAlphabet, 6)()
}
