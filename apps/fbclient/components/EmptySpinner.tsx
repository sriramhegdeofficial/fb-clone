import React, { FC, useEffect, useState } from 'react';

// or any spinner component

export interface LazyLoaderProps {
  delay?: number;
}

const EmptySpinner: FC<LazyLoaderProps> = ({ delay = 250 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return show ? <React.Fragment /> : null;
};

export default EmptySpinner;
