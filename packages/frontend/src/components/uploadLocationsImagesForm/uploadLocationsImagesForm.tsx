import DropFiles from "@front/components/dropFiles/dropFiles";

const UploadLocationsImagesForm = () => {
    const onFilesSelected = (files: File[]) => {
        console.log(files);
    }

    return <DropFiles onFilesSelected={onFilesSelected} />;
};

export default UploadLocationsImagesForm;