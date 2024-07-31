import React from 'react';
import Image from 'next/image';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import styles from './avatar.module.css';

type AvatarProps = {
    src: string;
    alt: string;
}

const Avatar = ({ src, alt }: AvatarProps) => {
    return <MFlex align="center" justify="center" className={styles.avatar}><Image src={src} alt={alt} width={44} height={44} /></MFlex>     
}     

export default Avatar;