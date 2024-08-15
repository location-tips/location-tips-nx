import DropFiles from '@front/components/dropFiles/dropFiles';
import LocationsUploadProgress from '@front/components/locationsUploadProgress/locationsUploadProgress';
import useCreateLocations from '@front/stores/useCreateLocations';
import { useCallback, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import useModal from '@front/stores/useModal';

const UploadLocationsImagesForm = () => {
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
