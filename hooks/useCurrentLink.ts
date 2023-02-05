import { useEffect, useState } from "react";

const useCurrentLink = () => {
  const [currentLink, setCurrentLink] = useState<string>('');

  useEffect(() => {
    setCurrentLink(window.location.href)
  }, []);

  return [currentLink]
}

export default useCurrentLink
