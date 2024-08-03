import ModalHeader from '@front/components/modal/modalHeader';
import UploadLocationsImagesForm from '@front/components/uploadLocationsImagesForm/uploadLocationsImagesForm';
import { ReactNode } from 'react';
import { create } from 'zustand';

export enum MODALS {
  ADD_LOCATION = 'ADD_LOCATION',
  EDIT_LOCATION = 'EDIT_LOCATION',
}

interface ModalsState {
  currentModal: MODALS | null;
  modals: Map<
    MODALS,
    { header: ReactNode; content: ReactNode; footer: ReactNode }
  >;
  registerModal: (
    modal: MODALS,
    header: ReactNode,
    content: ReactNode,
    footer: ReactNode
  ) => void;
  showModal: (modal: MODALS) => void;
  hideModal: () => void;
}

const useModal = create<ModalsState>((set) => ({
  currentModal: null,
  modals: new Map([
    [
      MODALS.ADD_LOCATION,
      {
        header: <ModalHeader title="Add new locations" />,
        content: <UploadLocationsImagesForm />,
        footer: null,
      },
    ],
  ]),
  showModal: (modal) => set(() => ({ currentModal: modal })),
  hideModal: () => set(() => ({ currentModal: null })),
  registerModal: (modal, header, content, footer) =>
    set((prev) => ({
      modals: prev.modals.set(modal, { header, content, footer }),
    })),
}));

export default useModal;
