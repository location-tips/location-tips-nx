import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import './Avatar.vars.css';
import styles from './Avatar.module.css';

type AvatarProps = {
  src: string;
  alt: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Avatar = ({ src, alt, className, ...restProps }: AvatarProps) => {
  return (
    <MFlex
      align="center"
      justify="center"
      className={clsx(styles.avatar, className)}
      {...restProps}
    >
      <Image src={src} alt={alt} width={44} height={44} />
    </MFlex>
  );
};

export default Avatar;
