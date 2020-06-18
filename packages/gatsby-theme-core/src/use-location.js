import { useLocation as useReachLocation } from "@reach/router"

export const useLocation = () => {
  const { pathname, ...rest } = useReachLocation()
  return {
    isFront: pathname === "/",
    ...rest,
  }
}
