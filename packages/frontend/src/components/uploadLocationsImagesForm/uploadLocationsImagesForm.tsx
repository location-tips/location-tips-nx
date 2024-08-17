import { useCallback, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

import { DropFiles } from '@front/components/DropFiles';
import { LocationsUploadProgress } from '@front/components/LocationsUploadProgress';
import useCreateLocations from '@front/stores/useCreateLocations';
import useModal from '@front/stores/useModal';

export const UploadLocationsImagesForm = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const createLocation = useCreateLocations();
  const { hideModal } = useModal();

  const onFilesSelected = useCallback((files: File[]) => {
    setSelectedFiles(files);
  }, []);

  useEffect(() => {
    createLocation.reset();
  });

  useEffect(() => {
    if (
      createLocation.locations.length > 0 &&
      createLocation.locations.length + createLocation.failed ===
        createLocation.pending
    ) {
      hideModal(() => {
        redirect('/locations/update');
      });
    }
  }, [
    createLocation.locations,
    createLocation.pending,
    createLocation.failed,
    hideModal,
  ]);

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
