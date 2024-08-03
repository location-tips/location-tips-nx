'use client';

import React, { useMemo } from 'react';

import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import useModal from '@front/stores/useModal';

import styles from './modal.module.css';

const Modal = () => {
  const modalStore = useModal();

  const modalData = useMemo(
    () =>
      modalStore.currentModal
        ? modalStore.modals.get(modalStore.currentModal)
        : undefined,
    [modalStore.currentModal, modalStore.modals]
  );

  return modalStore.currentModal && modalData ? (
    <MFlex
      direction="row"
      justify="center"
      align="start"
      className={styles.wrapper}
      role="dialog"
    >
      <div className={styles.overlay} onClick={modalStore.hideModal}></div>
      <MCard
        className={styles.modal}
        header={modalData.header}
        footer={modalData.footer}
      >
        {modalData.content}
      </MCard>
    </MFlex>
  ) : null;
};

export default Modal;
