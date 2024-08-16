import { ReactNode } from 'react';
import { create } from 'zustand';

import ModalHeader from '@front/components/modal/modalHeader';
import UploadLocationsImagesForm from '@front/components/uploadLocationsImagesForm/uploadLocationsImagesForm';

export enum MODALS {
  ADD_LOCATION = 'ADD_LOCATION',
  EDIT_LOCATION = 'EDIT_LOCATION',
  VIEW_LOCATION = 'VIEW_LOCATION',
}

interface ModalsState {
  currentModal: MODALS | null;
  modals: Map<
    MODALS,
    { header: ReactNode; content: ReactNode; footer: ReactNode }
  >;
  onHide?: (() => void) | null;
  onShow?: (() => void) | null;
  registerModal: (
    modal: MODALS,
    header: ReactNode,
    content: ReactNode,
    footer: ReactNode,
  ) => void;
  showModal: (modal: MODALS, callback?: () => void) => void;
  hideModal: (callback?: () => void) => void;
}

const useModal = create<ModalsState>((set) => ({
  currentModal: null,
  onHide: null,
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
  showModal: (modal, callback) =>
    set(() => ({ currentModal: modal, onHide: null, onShow: callback })),
  hideModal: (callback) =>
    set(() => ({ currentModal: null, onShow: null, onHide: callback })),
  registerModal: (modal, header, content, footer) =>
    set((prev) => ({
      modals: prev.modals.set(modal, { header, content, footer }),
    })),
}));

export default useModal;
