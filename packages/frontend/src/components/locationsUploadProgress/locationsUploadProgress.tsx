'use client';

import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import '@front/utils/configureFirebase';
import LocationUploadProgress from '@front/components/locationUploadProgress/locationUploadProgress';

const auth = getAuth();

type LocationsUploadProgressProps = {
  files: File[];
};

const LocationsUploadProgress = ({ files }: LocationsUploadProgressProps) => {
  const [token, setToken] = useState<string>();

  useEffect(() => {
    (async () => {
      const t = await auth.currentUser?.getIdToken();
      setToken(t);
    })();
  }, []);

  return (
    <MFlex direction="row" justify="center" align="center" gap="l">
      {token &&
        files.map((file) => (
          <LocationUploadProgress key={file.name} file={file} token={token} />
        ))}
    </MFlex>
  );
};

export default LocationsUploadProgress;
