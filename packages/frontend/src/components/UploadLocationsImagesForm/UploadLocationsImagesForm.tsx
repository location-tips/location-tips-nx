import { useCallback, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

import { DropFiles } from '@front/components/DropFiles';
import { LocationsUploadProgress } from '@front/components/LocationsUploadProgress';
import useCreateLocations from '@front/stores/useCreateLocations';
import useModal from '@front/stores/useModal';

export const UploadLocationsImagesForm = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const {
    reset: resetLocations,
    locations,
    failed,
    pending,
  } = useCreateLocations();
  const { hideModal } = useModal();

  const onFilesSelected = useCallback((files: File[]) => {
    setSelectedFiles(files);
  }, []);

  useEffect(() => {
    resetLocations();
  }, [resetLocations]);

  useEffect(() => {
    if (locations.length > 0 && locations.length + failed === pending) {
      hideModal(() => {
        redirect('/locations/update');
      });
    }
  }, [locations, pending, failed, hideModal]);

  return (
    <>
      {selectedFiles.length === 0 ? (
        <DropFiles onFilesSelected={onFilesSelected} />
      ) : (
        <LocationsUploadProgress files={selectedFiles} />
      )}
    </>
  );
};

export default UploadLocationsImagesForm;
