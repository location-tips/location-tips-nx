import React from 'react';
import Image from 'next/image';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import './avatar.vars.css';
import styles from './avatar.module.css';
import clsx from 'clsx';

type AvatarProps = {
  src: string;
  alt: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Avatar = ({ src, alt, className, ...restProps }: AvatarProps) => {
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
