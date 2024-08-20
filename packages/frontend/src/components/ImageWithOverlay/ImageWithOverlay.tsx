'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

import { ImageOverlay } from '@front/components/ImageOverlay';

import styles from './ImageWithOverlay.module.css';

type ImageWithOverlayProps = ImageProps & {
  original: string;
  alt: string;
};

export const ImageWithOverlay = ({
  original,
  alt,
  ...imageProps
}: ImageWithOverlayProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.imageWithOverlay}>
      <Image {...imageProps} alt={alt} onClick={() => setOpen(true)} />
      <ImageOverlay
        url={original}
        open={open}
        title={alt}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};
