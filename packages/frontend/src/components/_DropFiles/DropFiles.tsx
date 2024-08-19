import React, {
  ChangeEvent,
  DragEvent,
  useEffect,
  useId,
  useState,
} from 'react';
import clsx from 'clsx';

import { MCaption } from '@location-tips/location-tips-uikit/atoms/MCaption';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';
import { MLabel } from '@location-tips/location-tips-uikit/atoms/MLabel';

import { SystemUiconsPicture } from '@front/icons/SystemUiconsPicture';

import './DropFiles.vars.css';
import styles from './DropFiles.module.css';

type DropFilesProps = {
  onFilesSelected: (files: File[]) => void;
};

export const DropFiles = ({ onFilesSelected }: DropFilesProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const id = useId();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer?.files;

    if (droppedFiles && droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  return (
    <section
      className={clsx(styles.dndArea)}
      onDrop={handleDrop}
      onDragOver={(event) => {
        event.preventDefault();
      }}
    >
      <MFlex direction="column" justify="center" align="center" gap="2xl">
        <MFlex direction="column" justify="center" align="center" gap="l">
          <SystemUiconsPicture width={48} height={48} className={styles.icon} />
          <MFlex
            direction="row"
            gap="xs"
            justify="center"
            align="center"
            className={styles.uploadInfo}
          >
            <MText>Drag an image here or</MText>
            <MLabel htmlFor={id} className={styles.uploadLink}>
              upload file
            </MLabel>
            <input
              type="file"
              hidden
              id={id}
              onChange={handleFileChange}
              accept=".jpg,.heic,.jpeg"
              multiple
            />
          </MFlex>
        </MFlex>
        <MCaption className={styles.uploadDescription}>
          If you image contains GPS coordinates, then the entire location will
          <br />
          be pulled up automatically
        </MCaption>
      </MFlex>
    </section>
  );
};

export default DropFiles;
