
'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
  originalSrc?: string | null;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackSrc, originalSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  const [triedOriginal, setTriedOriginal] = useState(false);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        if (originalSrc && !triedOriginal) {
          setImgSrc(originalSrc);
          setTriedOriginal(true);
          return;
        }
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
