import { useEffect, useState } from "react";

const useMountTransition = (isMounted) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(true);

  useEffect(() => {
    if (isMounted && hasTransitionedIn) {
      setHasTransitionedIn(true);
    }
  }, [isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};

export default useMountTransition;