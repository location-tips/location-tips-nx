import React, { useRef, useState } from 'react';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

import { MdiCameraOutline } from '@front/icons/MdiCameraOutline';

import styles from './ImageUploadField.module.css';

type ImageUploadFieldProps = {
  name?: string;
};

export const ImageUploadField = ({ name = 'image' }: ImageUploadFieldProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <MFlex>
      <MButton mode="tertiary" type="button">
        <MdiCameraOutline width={20} height={20} onClick={handleButtonClick} />
      </MButton>

      <input
        type="file"
        accept="image/*"
        name={name}
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />

      {selectedImage && (
        <div
          className={styles.previewContainer}
          style={{ backgroundImage: `url(${selectedImage})` }}
        ></div>
      )}
    </MFlex>
  );
};

export default ImageUploadField;
