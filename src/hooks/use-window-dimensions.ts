import { useState, useCallback, useEffect } from 'react';

import { useHasMounted } from './use-has-mounted';

interface WindowDimensions {
  width: number;
  height: number;
}

export const useWindowDimensions = (): WindowDimensions => {
  const hasMounted = useHasMounted();
  const [dimens, setDimens] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

  const handleResize = useCallback(() => {
    if (!hasMounted) return;
    setDimens({ width: window.innerWidth, height: window.innerHeight });
  }, [hasMounted]);

  useEffect(() => {
    if (hasMounted) {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasMounted, handleResize]);

  return dimens;
};
