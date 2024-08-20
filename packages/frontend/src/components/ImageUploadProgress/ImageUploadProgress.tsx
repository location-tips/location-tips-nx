import clsx from 'clsx';
import { ProgressStatus } from '@types';

import { Avatar } from '@front/components/Avatar';
import { ZStack } from '@front/components/ZStack';
import { MdiCheckBold } from '@front/icons/MdiCheckBold';
import { MdiLoadingLoop } from '@front/icons/MdiLoadingLoop';
import { MdiClose } from '@front/icons/MdiClose';

import './ImageUploadProgress.vars.css';
import styles from './ImageUploadProgress.module.css';

type ImageUploadProgressProps = {
  image: string;
  progress: number;
  status: ProgressStatus;
};

export const ImageUploadProgress = ({
  image,
  progress,
  status,
}: ImageUploadProgressProps) => {
  return (
    <ZStack>
      <div
        className={clsx(styles.progress)}
        style={{
          background: `conic-gradient(var(--image-upload-progress-value-color) ${
            progress * 3.6
          }deg, var(--image-upload-progress-background-color) 0deg)`,
        }}
      ></div>
      <div className={styles.image}>
        <Avatar src={image} alt="Loading progress" />
      </div>
      {status === ProgressStatus.Pending && (
        <div className={styles.pending}>
          <MdiLoadingLoop width={36} height={36} />
        </div>
      )}
      {status === ProgressStatus.Uploading && (
        <div className={styles.info}>{progress}%</div>
      )}
      {status === ProgressStatus.Processing && (
        <div className={styles.processing}>
          <MdiLoadingLoop width={36} height={36} />
        </div>
      )}
      {status === ProgressStatus.Done && (
        <div className={styles.done}>
          <MdiCheckBold width={36} height={36} />
        </div>
      )}
      {status === ProgressStatus.Fail && (
        <div className={styles.fail}>
          <MdiClose width={36} height={36} />
        </div>
      )}
    </ZStack>
  );
};

export default ImageUploadProgress;
