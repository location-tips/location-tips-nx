'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import axios, { type AxiosProgressEvent, type AxiosResponse } from 'axios';
import { TLocationEntity, ProgressStatus, TLocationsWithImages } from '@types';

import { imagePlaceholder } from '@front/components/LocationUploadProgress/placeholderImage';
import { ImageUploadProgress } from '@front/components/ImageUploadProgress';
import useCreateLocations from '@front/stores/useCreateLocations';
import { extractExif } from '@front/utils/exif';

type LocationUploadProgressProps = {
  file: File;
  token: string;
};

export const LocationUploadProgress = ({
  file,
  token,
}: LocationUploadProgressProps) => {
  const ref = useRef<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<ProgressStatus>(ProgressStatus.Pending);
  const [webp, setWebp] = useState<Blob | null>(null);

  const { addFailed, addPending, addLocation } = useCreateLocations();

  const formData = useMemo(() => {
    const newFormData = new FormData();

    newFormData.append('image', file);
    newFormData.append('token', token);

    return newFormData;
  }, [file, token]);

  const onUploadProgress = useCallback((progressEvent: AxiosProgressEvent) => {
    const progress = progressEvent
      ? Math.round((progressEvent.loaded / (progressEvent.total ?? 1)) * 100)
      : 0;

    setProgress(progress);
  }, []);

  useEffect(() => {
    (async () => {
      if (file.type === 'image/heic') {
        const heic2any = (await import('heic2any')).default;

        heic2any({
          blob: file,
          toType: 'image/webp',
          quality: 0.5,
        }).then((blob) => {
          setWebp(Array.isArray(blob) ? blob[0] : blob);
        });
      } else {
        setWebp(file);
      }
    })();
  }, [file]);

  useEffect(() => {
    if (
      formData &&
      ref.current === false &&
      status === ProgressStatus.Pending
    ) {
      (async () => {
        try {
          const f = formData.get('image') as File;
          const exif = await extractExif(Buffer.from(await f.arrayBuffer()));

          if (!exif || !exif.gps) {
            addFailed();
            setStatus(ProgressStatus.Fail);
            throw new Error('No GPS data found in EXIF');
          }

          setStatus(ProgressStatus.Uploading);
          addPending();
          ref.current = true;

          const data = await axios.post<
            TLocationEntity,
            AxiosResponse<TLocationsWithImages>,
            FormData
          >('/api/location/create', formData, {
            onUploadProgress,
          });

          setStatus(ProgressStatus.Done);
          addLocation(data.data);
        } catch (error) {
          console.error(error);
          addFailed();
          setStatus(ProgressStatus.Fail);
        }
      })();
    }
  }, [addFailed, addLocation, addPending, formData, onUploadProgress, status]);

  useEffect(() => {
    if (progress === 100) {
      setStatus(ProgressStatus.Processing);
    }
  }, [progress]);

  return (
    <ImageUploadProgress
      key={file.name}
      image={!webp ? imagePlaceholder : URL.createObjectURL(webp)}
      progress={progress}
      status={status}
    />
  );
};

export default LocationUploadProgress;
