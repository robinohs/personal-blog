import { EffectCallback, useEffect, useState } from "react";

const useOneTimeEffect = (effect: EffectCallback) => {
  const [, setDidRun] = useState(false);

  useEffect(() => {
    setDidRun((oldVal) => {
      if (!oldVal) effect();
      return true;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOneTimeEffect;
