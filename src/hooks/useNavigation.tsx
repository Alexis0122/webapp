import { useRouter } from 'next/router'

const useNavigation = () => {
  const router = useRouter()

  const goTo = (path: string, reload = false) => {
    router.push(path).then(() => {
      if (reload) {
        router.reload();
      }
    });
  };

  return { goTo }
}

export default useNavigation
