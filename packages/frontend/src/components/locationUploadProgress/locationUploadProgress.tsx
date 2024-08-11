'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { TLocationEntity, ProgressStatus, TLocationsWithImages } from '@types';
import axios, { AxiosProgressEvent, AxiosResponse } from 'axios';
import { imagePlaceholder } from '@front/components/locationUploadProgress/placeholderImage';

import ImageUploadProgress from '@front/components/imageUploadProgress/imageUploadProgress';
import useCreateLocations from '@front/stores/useCreateLocations';

type LocationUploadProgressProps = {
  file: File;
  token: string;
};

const LocationUploadProgress = ({
  file,
  token,
}: LocationUploadProgressProps) => {
  const ref = useRef<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<ProgressStatus>(ProgressStatus.Pending);
  const [webp, setWebp] = useState<Blob | null>(null);

  const createLocation = useCreateLocations();

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
    if (formData && ref.current === false) {
      setStatus(ProgressStatus.Uploading);
      createLocation.addPending();
      ref.current = true;

      axios
        .post<TLocationEntity, AxiosResponse<TLocationsWithImages>, FormData>(
          '/api/location/create',
          formData,
          {
            onUploadProgress,
          }
        )
        .then((data) => {
          setStatus(ProgressStatus.Done);
          createLocation.addLocation(data.data);
        })
        .catch((error) => {
          console.error(error);
          createLocation.addFailed();
          setStatus(ProgressStatus.Fail);
        });
    }
  }, [formData, status]);

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
