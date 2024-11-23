import { useRouter } from 'next/router'

const useNavigation = () => {
  const router = useRouter()

  const goTo = (path: string) => {
    router.push(path)
  }

  return { goTo }
}

export default useNavigation
